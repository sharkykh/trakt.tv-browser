'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var ky = require('ky')["default"];

var randomBytes = require('randombytes');

var methods = require('./methods.json');

var sanitizer = require('sanitizer').sanitize; // default settings


var defaultUrl = 'https://api.trakt.tv';
var redirectUrn = 'urn:ietf:wg:oauth:2.0:oob';
var defaultUa = "trakt.tv/7.1.0 (https://github.com/sharkykh/trakt.tv)";

module.exports =
/*#__PURE__*/
function () {
  function Trakt() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var debug = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Trakt);

    if (!settings.client_id) throw Error('Missing client_id');
    this._authentication = {};
    this._settings = {
      client_id: settings.client_id,
      client_secret: settings.client_secret,
      redirect_uri: settings.redirect_uri || redirectUrn,
      debug: settings.debug || debug,
      endpoint: settings.api_url || defaultUrl,
      pagination: settings.pagination,
      useragent: settings.useragent || defaultUa
    };

    this._construct();

    settings.plugins && this._plugins(settings.plugins, settings.options);
  } // Creates methods for all requests


  _createClass(Trakt, [{
    key: "_construct",
    value: function _construct() {
      var _this = this;

      var _loop = function _loop(url) {
        var urlParts = url.split('/');
        var name = urlParts.pop(); // key for function

        var tmp = _this;

        for (var p = 1; p < urlParts.length; ++p) {
          // acts like mkdir -p
          tmp = tmp[urlParts[p]] || (tmp[urlParts[p]] = {});
        }

        tmp[name] = function () {
          var method = methods[url]; // closure forces copy

          return function (params) {
            return _this._call(method, params);
          };
        }();
      };

      for (var url in methods) {
        _loop(url);
      }

      this._debug("Trakt.tv: module loaded, as ".concat(this._settings.useragent));
    } // Initialize plugins

  }, {
    key: "_plugins",
    value: function _plugins(plugins) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      for (var name in plugins) {
        if (!plugins.hasOwnProperty(name)) continue;
        this[name] = plugins[name];
        this[name].init(this, options[name] || {});

        this._debug("Trakt.tv: ".concat(name, " plugin loaded"));
      }
    } // Debug & Print

  }, {
    key: "_debug",
    value: function _debug(req) {
      this._settings.debug && console.log(req.method ? "".concat(req.method, ": ").concat(req.url) : req);
    } // Authentication calls

  }, {
    key: "_exchange",
    value: function _exchange(str) {
      var _this2 = this;

      var req = {
        method: 'POST',
        url: "".concat(this._settings.endpoint, "/oauth/token"),
        headers: {
          'User-Agent': this._settings.useragent,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(str)
      };

      this._debug(req);

      return ky(req.url, req).then(function (response) {
        return response.json().then(function (body) {
          _this2._authentication.refresh_token = body.refresh_token;
          _this2._authentication.access_token = body.access_token;
          _this2._authentication.expires = (body.created_at + body.expires_in) * 1000;
          return _this2._sanitize(body);
        })["catch"](function (error) {
          throw error;
        });
      })["catch"](function (error) {
        throw error.response && error.response.statusCode == 401 ? Error(error.response.headers['www-authenticate']) : error;
      });
    } // De-authentication POST

  }, {
    key: "_revoke",
    value: function _revoke() {
      var req = {
        method: 'POST',
        url: "".concat(this._settings.endpoint, "/oauth/revoke"),
        headers: {
          'User-Agent': this._settings.useragent,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': "Bearer ".concat(this._authentication.access_token),
          'trakt-api-version': '2',
          'trakt-api-key': this._settings.client_id
        },
        body: "token=[".concat(this._authentication.access_token, "]")
      };

      this._debug(req);

      ky(req.url, req);
    } // Get code to paste on login screen

  }, {
    key: "_device_code",
    value: function _device_code(str, type) {
      var _this3 = this;

      var req = {
        method: 'POST',
        url: "".concat(this._settings.endpoint, "/oauth/device/").concat(type),
        headers: {
          'User-Agent': this._settings.useragent,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(str)
      };

      this._debug(req);

      return ky(req.url, req).then(function (response) {
        return response.json().then(function (data) {
          return _this3._sanitize(data);
        })["catch"](function (error) {
          throw error;
        });
      })["catch"](function (error) {
        throw error.response && error.response.statusCode == 401 ? Error(error.response.headers['www-authenticate']) : error;
      });
    } // Parse url before api call

  }, {
    key: "_parse",
    value: function _parse(method, params) {
      if (!params) params = {};
      var queryParts = [];
      var pathParts = []; // ?Part

      var queryPart = method.url.split('?')[1];

      if (queryPart) {
        var queryParams = queryPart.split('&');

        for (var i in queryParams) {
          var name = queryParams[i].split('=')[0];
          (params[name] || params[name] === 0) && queryParts.push("".concat(name, "=").concat(params[name]));
        }
      } // /part


      var pathPart = method.url.split('?')[0];
      var pathParams = pathPart.split('/');

      for (var k in pathParams) {
        if (pathParams[k][0] != ':') {
          pathParts.push(pathParams[k]);
        } else {
          var param = params[pathParams[k].substr(1)];

          if (param || param === 0) {
            pathParts.push(param);
          } else {
            // check for missing required params
            if (method.optional && method.optional.indexOf(pathParams[k].substr(1)) === -1) throw Error("Missing mandatory paramater: ".concat(pathParams[k].substr(1)));
          }
        }
      } // Filters


      var filters = ['query', 'years', 'genres', 'languages', 'countries', 'runtimes', 'ratings', 'certifications', 'networks', 'status'];

      for (var p in params) {
        filters.indexOf(p) !== -1 && queryParts.indexOf("".concat(p, "=").concat(params[p])) === -1 && queryParts.push("".concat(p, "=").concat(params[p]));
      } // Pagination


      if (method.opts['pagination']) {
        params['page'] && queryParts.push("page=".concat(params['page']));
        params['limit'] && queryParts.push("limit=".concat(params['limit']));
      } // Extended


      if (method.opts['extended'] && params['extended']) {
        queryParts.push("extended=".concat(params['extended']));
      }

      return [this._settings.endpoint, pathParts.join('/'), queryParts.length ? "?".concat(queryParts.join('&')) : ''].join('');
    } // Parse methods then hit trakt

  }, {
    key: "_call",
    value: function _call(method, params) {
      var _this4 = this;

      if (method.opts['auth'] === true && (!this._authentication.access_token || !this._settings.client_secret)) throw Error('OAuth required');
      var req = {
        method: method.method,
        url: this._parse(method, params),
        headers: {
          'User-Agent': this._settings.useragent,
          'Content-Type': 'application/json',
          'trakt-api-version': '2',
          'trakt-api-key': this._settings.client_id
        },
        body: method.body ? Object.assign({}, method.body) : {}
      };
      if (method.opts['auth'] && this._authentication.access_token) req.headers['Authorization'] = "Bearer ".concat(this._authentication.access_token);

      for (var k in params) {
        if (k in req.body) req.body[k] = params[k];
      }

      for (var _k in req.body) {
        if (!req.body[_k]) delete req.body[_k];
      } // Fixes: `TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body.`


      if (['GET', 'HEAD'].includes(req.method.toUpperCase())) {
        req.body = null;
      } else {
        req.body = JSON.stringify(req.body);
      }

      this._debug(req);

      return ky(req.url, req).then(function (response) {
        return _this4._parseResponse(method, params, response);
      });
    } // Parse trakt response: pagination & stuff

  }, {
    key: "_parseResponse",
    value: function _parseResponse(method, params, response) {
      var _this5 = this;

      return response.clone().json()["catch"](function () {
        return response.text();
      }).then(function (data) {
        var parsed = data;

        if (params && params.pagination || _this5._settings.pagination) {
          parsed = {
            data: data
          };

          if (method.opts.pagination && response.headers) {
            // http headers field names are case-insensitive
            var headers = JSON.parse(JSON.stringify(response.headers).toLowerCase());
            parsed.pagination = {
              'item-count': headers['x-pagination-item-count'],
              'limit': headers['x-pagination-limit'],
              'page': headers['x-pagination-page'],
              'page-count': headers['x-pagination-page-count']
            };
          } else {
            parsed.pagination = false;
          }
        }

        return _this5._sanitize(parsed);
      });
    } // Sanitize output (xss)

  }, {
    key: "_sanitize",
    value: function _sanitize(input) {
      var sanitizeString = function sanitizeString(string) {
        return sanitizer(string);
      };

      var sanitizeObject = function sanitizeObject(obj) {
        var result = obj;

        for (var prop in obj) {
          result[prop] = obj[prop];

          if (obj[prop] && (obj[prop].constructor === Object || obj[prop].constructor === Array)) {
            result[prop] = sanitizeObject(obj[prop]);
          } else if (obj[prop] && obj[prop].constructor === String) {
            result[prop] = sanitizeString(obj[prop]);
          }
        }

        return result;
      };

      var output = input;

      if (input && (input.constructor === Object || input.constructor === Array)) {
        output = sanitizeObject(input);
      } else if (input && input.constructor === String) {
        output = sanitizeString(input);
      }

      return output;
    } // Get authentication url for browsers

  }, {
    key: "get_url",
    value: function get_url() {
      this._authentication.state = randomBytes(6).toString('hex'); // Replace 'api' from the api_url to get the top level trakt domain

      var base_url = this._settings.endpoint.replace(/api\W/, '');

      return "".concat(base_url, "/oauth/authorize?response_type=code&client_id=").concat(this._settings.client_id, "&redirect_uri=").concat(this._settings.redirect_uri, "&state=").concat(this._authentication.state);
    } // Verify code; optional state

  }, {
    key: "exchange_code",
    value: function exchange_code(code, state) {
      if (state && state != this._authentication.state) throw Error('Invalid CSRF (State)');
      return this._exchange({
        code: code,
        client_id: this._settings.client_id,
        client_secret: this._settings.client_secret,
        redirect_uri: this._settings.redirect_uri,
        grant_type: 'authorization_code'
      });
    } // Get authentification codes for devices

  }, {
    key: "get_codes",
    value: function get_codes() {
      return this._device_code({
        client_id: this._settings.client_id
      }, 'code');
    } // Calling trakt on a loop until it sends back a token

  }, {
    key: "poll_access",
    value: function poll_access(poll) {
      var _this6 = this;

      if (!poll || poll && poll.constructor !== Object) throw Error('Invalid Poll object');
      var begin = Date.now();
      return new Promise(function (resolve, reject) {
        var call = function call() {
          if (begin + poll.expires_in * 1000 <= Date.now()) {
            clearInterval(polling);
            return reject(Error('Expired'));
          }

          _this6._device_code({
            code: poll.device_code,
            client_id: _this6._settings.client_id,
            client_secret: _this6._settings.client_secret
          }, 'token').then(function (body) {
            _this6._authentication.refresh_token = body.refresh_token;
            _this6._authentication.access_token = body.access_token;
            _this6._authentication.expires = Date.now() + body.expires_in * 1000; // Epoch in milliseconds

            clearInterval(polling);
            resolve(body);
          })["catch"](function (error) {
            // do nothing on 400
            if (error.response && error.response.statusCode === 400) return;
            clearInterval(polling);
            reject(error);
          });
        };

        var polling = setInterval(function () {
          call();
        }, poll.interval * 1000);
      });
    } // Refresh access token

  }, {
    key: "refresh_token",
    value: function refresh_token() {
      return this._exchange({
        refresh_token: this._authentication.refresh_token,
        client_id: this._settings.client_id,
        client_secret: this._settings.client_secret,
        redirect_uri: this._settings.redirect_uri,
        grant_type: 'refresh_token'
      });
    } // Import token

  }, {
    key: "import_token",
    value: function import_token(token) {
      var _this7 = this;

      this._authentication.access_token = token.access_token;
      this._authentication.expires = token.expires;
      this._authentication.refresh_token = token.refresh_token;
      return new Promise(function (resolve, reject) {
        if (token.expires < Date.now()) {
          _this7.refresh_token().then(function () {
            return resolve(_this7.export_token());
          })["catch"](reject);
        } else {
          resolve(_this7.export_token());
        }
      });
    } // Export token

  }, {
    key: "export_token",
    value: function export_token() {
      return {
        access_token: this._authentication.access_token,
        expires: this._authentication.expires,
        refresh_token: this._authentication.refresh_token
      };
    } // Revoke token

  }, {
    key: "revoke_token",
    value: function revoke_token() {
      if (this._authentication.access_token) {
        this._revoke();

        this._authentication = {};
      }
    }
  }]);

  return Trakt;
}();
