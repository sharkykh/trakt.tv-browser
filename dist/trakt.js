'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ky = _interopDefault(require('ky'));
var randomBytes = _interopDefault(require('randombytes'));
var sanitizer = require('sanitizer');

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

var methods = {
	"/calendars/my/shows": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/my/shows/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/my/new_shows": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/my/shows/new/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/my/premieres_shows": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/my/shows/premieres/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/my/movies": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/my/movies/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/my/dvd": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/my/dvd/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/all/shows": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/all/shows/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/all/new_shows": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/all/shows/new/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/all/premieres_shows": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/all/shows/premieres/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/all/movies": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/all/movies/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/calendars/all/dvd": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/calendars/all/dvd/:start_date/:days",
	optional: [
		"start_date",
		"days"
	]
},
	"/checkin/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/checkin",
	body: {
		movie: null,
		episode: null,
		sharing: null,
		message: null,
		venue_id: null,
		venue_name: null,
		app_version: null,
		app_date: null
	},
	optional: [
	]
},
	"/checkin/delete": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/checkin",
	optional: [
	]
},
	"/certifications": {
	opts: {
	},
	method: "GET",
	url: "/certifications/:type",
	optional: [
	]
},
	"/comments/comment/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/comments",
	body: {
		movie: null,
		show: null,
		season: null,
		episode: null,
		list: null,
		comment: null,
		spoiler: null,
		review: null
	},
	optional: [
	]
},
	"/comments/comment/get": {
	opts: {
	},
	method: "GET",
	url: "/comments/:id",
	optional: [
	]
},
	"/comments/comment/update": {
	opts: {
		auth: true
	},
	method: "PUT",
	url: "/comments/:id",
	body: {
		comment: null,
		spoiler: null,
		review: null
	},
	optional: [
	]
},
	"/comments/comment/remove": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/comments/:id",
	optional: [
	]
},
	"/comments/replies/get": {
	opts: {
		auth: true,
		pagination: true
	},
	method: "GET",
	url: "/comments/:id/replies",
	optional: [
	]
},
	"/comments/replies/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/comments/:id/replies",
	body: {
		comment: null,
		spoiler: null
	},
	optional: [
	]
},
	"/comments/item": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/comments/:id/item",
	optional: [
	]
},
	"/comments/likes": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/comments/:id/likes",
	optional: [
	]
},
	"/comments/like/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/comments/:id/like",
	optional: [
	]
},
	"/comments/like/remove": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/comments/:id/like",
	optional: [
	]
},
	"/comments/trending": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/comments/trending/:comment_type/:type?include_replies=",
	optional: [
		"comment_type",
		"type",
		"include_replies"
	]
},
	"/comments/recent": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/comments/recent/:comment_type/:type?include_replies=",
	optional: [
		"comment_type",
		"type",
		"include_replies"
	]
},
	"/comments/updates": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/comments/updates/:comment_type/:type?include_replies=",
	optional: [
		"comment_type",
		"type",
		"include_replies"
	]
},
	"/countries": {
	opts: {
	},
	method: "GET",
	url: "/countries/:type",
	optional: [
	]
},
	"/genres": {
	opts: {
	},
	method: "GET",
	url: "/genres/:type",
	optional: [
	]
},
	"/languages": {
	opts: {
	},
	method: "GET",
	url: "/languages/:type",
	optional: [
	]
},
	"/lists/trending": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/lists/trending",
	optional: [
	]
},
	"/lists/popular": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/lists/popular",
	optional: [
	]
},
	"/movies/trending": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/trending",
	optional: [
	]
},
	"/movies/popular": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/popular",
	optional: [
	]
},
	"/movies/played": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/played/:period",
	optional: [
		"period"
	]
},
	"/movies/watched": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/watched/:period",
	optional: [
		"period"
	]
},
	"/movies/collected": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/collected/:period",
	optional: [
		"period"
	]
},
	"/movies/anticipated": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/anticipated",
	optional: [
	]
},
	"/movies/boxoffice": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/boxoffice",
	optional: [
	]
},
	"/movies/updates": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/updates/:start_date",
	optional: [
		"start_date"
	]
},
	"/movies/summary": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/:id",
	optional: [
	]
},
	"/movies/aliases": {
	opts: {
	},
	method: "GET",
	url: "/movies/:id/aliases",
	optional: [
	]
},
	"/movies/releases": {
	opts: {
	},
	method: "GET",
	url: "/movies/:id/releases/:country",
	optional: [
		"country"
	]
},
	"/movies/translations": {
	opts: {
	},
	method: "GET",
	url: "/movies/:id/translations/:language",
	optional: [
		"language"
	]
},
	"/movies/comments": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/movies/:id/comments/:sort",
	optional: [
		"sort"
	]
},
	"/movies/lists": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/movies/:id/lists/:type/:sort",
	optional: [
		"type",
		"sort"
	]
},
	"/movies/people": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/:id/people",
	optional: [
	]
},
	"/movies/ratings": {
	opts: {
	},
	method: "GET",
	url: "/movies/:id/ratings",
	optional: [
	]
},
	"/movies/related": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/:id/related?limit=",
	optional: [
		"limit"
	]
},
	"/movies/stats": {
	opts: {
	},
	method: "GET",
	url: "/movies/:id/stats",
	optional: [
	]
},
	"/movies/watching": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/movies/:id/watching",
	optional: [
	]
},
	"/networks": {
	opts: {
	},
	method: "GET",
	url: "/networks",
	optional: [
	]
},
	"/people/summary": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/people/:id",
	optional: [
	]
},
	"/people/movies": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/people/:id/movies",
	optional: [
	]
},
	"/people/shows": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/people/:id/shows",
	optional: [
	]
},
	"/people/lists": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/people/:id/lists/:type/:sort",
	optional: [
		"type",
		"sort"
	]
},
	"/recommendations/movies/get": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/recommendations/movies/?limit=&ignore_collected=",
	optional: [
		"limit",
		"ignore_collected"
	]
},
	"/recommendations/movies/hide": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/recommendations/movies/:id",
	optional: [
	]
},
	"/recommendations/shows/get": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/recommendations/shows/?limit=&ignore_collected=",
	optional: [
		"limit",
		"ignore_collected"
	]
},
	"/recommendations/shows/hide": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/recommendations/shows/:id",
	optional: [
	]
},
	"/scrobble/start": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/scrobble/start",
	body: {
		movie: null,
		episode: null,
		progress: null,
		app_version: null,
		app_date: null
	},
	optional: [
	]
},
	"/scrobble/pause": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/scrobble/pause",
	body: {
		movie: null,
		episode: null,
		progress: null,
		app_version: null,
		app_date: null
	},
	optional: [
	]
},
	"/scrobble/stop": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/scrobble/stop",
	body: {
		movie: null,
		episode: null,
		progress: null,
		app_version: null,
		app_date: null
	},
	optional: [
	]
},
	"/search/text": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/search/:type?query=&fields=",
	optional: [
		"fields"
	]
},
	"/search/id": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/search/:id_type/:id?type=&fields=",
	optional: [
		"type",
		"fields"
	]
},
	"/shows/trending": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/trending",
	optional: [
	]
},
	"/shows/popular": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/popular",
	optional: [
	]
},
	"/shows/played": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/played/:period",
	optional: [
		"period"
	]
},
	"/shows/watched": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/watched/:period",
	optional: [
		"period"
	]
},
	"/shows/collected": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/collected",
	optional: [
		"period"
	]
},
	"/shows/anticipated": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/anticipated",
	optional: [
	]
},
	"/shows/updates": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/updates/:start_date",
	optional: [
		"start_date"
	]
},
	"/shows/summary": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id",
	optional: [
	]
},
	"/shows/aliases": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/aliases",
	optional: [
	]
},
	"/shows/translations": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/translations/:language",
	optional: [
		"language"
	]
},
	"/shows/comments": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/shows/:id/comments/:sort",
	optional: [
		"sort"
	]
},
	"/shows/lists": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/shows/:id/lists/:type/:sort",
	optional: [
		"type",
		"sort"
	]
},
	"/shows/progress/collection": {
	opts: {
		auth: true
	},
	method: "GET",
	url: "/shows/:id/progress/collection?hidden=&specials=&count_specials=&last_activity=",
	optional: [
		"hidden",
		"specials",
		"count_specials",
		"last_activity"
	]
},
	"/shows/progress/watched": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/progress/watched?hidden=&specials=&count_specials=&last_activity=",
	optional: [
		"hidden",
		"specials",
		"count_specials",
		"last_activity"
	]
},
	"/shows/people": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/people",
	optional: [
	]
},
	"/shows/ratings": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/ratings",
	optional: [
	]
},
	"/shows/related": {
	opts: {
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/related",
	optional: [
	]
},
	"/shows/stats": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/stats",
	optional: [
	]
},
	"/shows/watching": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/watching",
	optional: [
	]
},
	"/shows/next_episode": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/next_episode",
	optional: [
	]
},
	"/shows/last_episode": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/last_episode",
	optional: [
	]
},
	"/seasons/summary": {
	opts: {
		extended: [
			"full",
			"episodes"
		]
	},
	method: "GET",
	url: "/shows/:id/seasons",
	optional: [
	]
},
	"/seasons/season": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/seasons/:season?translations=",
	optional: [
		"translations"
	]
},
	"/seasons/comments": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/comments/:sort",
	optional: [
		"sort"
	]
},
	"/seasons/lists": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/lists/:type/:sort",
	optional: [
		"type",
		"sort"
	]
},
	"/seasons/ratings": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/ratings",
	optional: [
	]
},
	"/seasons/watching": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/watching",
	optional: [
	]
},
	"/episodes/summary": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode",
	optional: [
	]
},
	"/episodes/translations": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode/translations/:language",
	optional: [
		"language"
	]
},
	"/episodes/comments": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode/comments/:sort",
	optional: [
		"sort"
	]
},
	"/episodes/lists": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode/lists/:type/:sort",
	optional: [
		"type",
		"sort"
	]
},
	"/episodes/ratings": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode/ratings",
	optional: [
	]
},
	"/episodes/stats": {
	opts: {
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode/stats",
	optional: [
	]
},
	"/episodes/watching": {
	opts: {
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/shows/:id/seasons/:season/episodes/:episode/watching",
	optional: [
	]
},
	"/sync/last_activities": {
	opts: {
		auth: true
	},
	method: "GET",
	url: "/sync/last_activities",
	optional: [
	]
},
	"/sync/playback/get": {
	opts: {
		auth: true
	},
	method: "GET",
	url: "/sync/playback/:type?limit=",
	optional: [
		"type",
		"limit"
	]
},
	"/sync/playback/remove": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/sync/playback/:id",
	optional: [
	]
},
	"/sync/collection/get": {
	opts: {
		auth: true,
		extended: [
			"full",
			"metadata"
		]
	},
	method: "GET",
	url: "/sync/collection/:type",
	optional: [
	]
},
	"/sync/collection/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/collection",
	body: {
		movies: null,
		shows: null,
		seasons: null,
		episodes: null
	},
	optional: [
	]
},
	"/sync/collection/remove": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/collection/remove",
	body: {
		movies: null,
		shows: null,
		seasons: null,
		episodes: null
	},
	optional: [
	]
},
	"/sync/watched": {
	opts: {
		auth: true,
		extended: [
			"full",
			"noseasons"
		]
	},
	method: "GET",
	url: "/sync/watched/:type",
	optional: [
	]
},
	"/sync/history/get": {
	opts: {
		auth: true,
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/sync/history/:type/:id?start_at=&end_at=",
	optional: [
		"type",
		"id",
		"start_at",
		"end_at"
	]
},
	"/sync/history/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/history",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/sync/history/remove": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/history/remove",
	body: {
		movies: null,
		shows: null,
		episodes: null,
		ids: null
	},
	optional: [
	]
},
	"/sync/ratings/get": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/sync/ratings/:type/:rating",
	optional: [
		"rating",
		"type"
	]
},
	"/sync/ratings/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/ratings",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/sync/ratings/remove": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/ratings/remove",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/sync/watchlist/get": {
	opts: {
		auth: true,
		pagination: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/sync/watchlist/:type",
	optional: [
		"type"
	]
},
	"/sync/watchlist/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/watchlist",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/sync/watchlist/remove": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/sync/watchlist/remove",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/users/settings": {
	opts: {
		auth: true
	},
	method: "GET",
	url: "/users/settings",
	optional: [
	]
},
	"/users/requests/get": {
	opts: {
		auth: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/requests",
	optional: [
	]
},
	"/users/requests/approve": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/requests/:id",
	optional: [
	]
},
	"/users/requests/deny": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/users/requests/:id",
	optional: [
	]
},
	"/users/hidden/get": {
	opts: {
		auth: true,
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/hidden/:section?type=",
	optional: [
		"type"
	]
},
	"/users/hidden/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/hidden/:section",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/users/hidden/remove": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/hidden/:section/remove",
	body: {
		movies: null,
		shows: null,
		episodes: null
	},
	optional: [
	]
},
	"/users/likes": {
	opts: {
		auth: true,
		pagination: true
	},
	method: "GET",
	url: "/users/:username/likes/:type",
	optional: [
		"type"
	]
},
	"/users/profile": {
	opts: {
		auth: "optional",
		extended: [
			"full",
			"vip"
		]
	},
	method: "GET",
	url: "/users/:username",
	optional: [
	]
},
	"/users/collection": {
	opts: {
		auth: "optional",
		extended: [
			"full",
			"metadata"
		]
	},
	method: "GET",
	url: "/users/:username/collection/:type",
	optional: [
	]
},
	"/users/comments": {
	opts: {
		auth: "optional",
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/comments/:comment_type/:type?include_replies=",
	optional: [
		"comment_type",
		"type",
		"include_replies"
	]
},
	"/users/lists/get": {
	opts: {
		auth: "optional"
	},
	method: "GET",
	url: "/users/:username/lists",
	optional: [
	]
},
	"/users/lists/create": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/lists",
	body: {
		name: null,
		description: null,
		privacy: null,
		display_numbers: null,
		allow_comments: null
	},
	optional: [
	]
},
	"/users/lists/reorder": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/lists/reorder",
	body: {
		rank: null
	},
	optional: [
	]
},
	"/users/list/get": {
	opts: {
		auth: "optional"
	},
	method: "GET",
	url: "/users/:username/lists/:id",
	optional: [
	]
},
	"/users/list/update": {
	opts: {
		auth: true
	},
	method: "PUT",
	url: "/users/:username/lists/:id",
	body: {
		name: null,
		description: null,
		privacy: null,
		display_numbers: null,
		allow_comments: null
	},
	optional: [
	]
},
	"/users/list/delete": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/users/:username/lists/:id",
	optional: [
	]
},
	"/users/list/like/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/lists/:id/like",
	optional: [
	]
},
	"/users/list/like/remove": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/users/:username/lists/:id/like",
	optional: [
	]
},
	"/users/list/items/get": {
	opts: {
		auth: "optional",
		pagination: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/lists/:id/items?type=",
	optional: [
		"type"
	]
},
	"/users/list/items/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/lists/:id/items",
	body: {
		movies: null,
		shows: null,
		people: null
	},
	optional: [
	]
},
	"/users/list/items/remove": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/lists/:id/items/remove",
	body: {
		movies: null,
		shows: null,
		people: null
	},
	optional: [
	]
},
	"/users/list/items/reorder": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/lists/:id/items/reorder",
	body: {
		rank: null
	},
	optional: [
	]
},
	"/users/list/comments": {
	opts: {
		pagination: true
	},
	method: "GET",
	url: "/users/:username/lists/:id/comments/:sort",
	optional: [
		"sort"
	]
},
	"/users/follow/add": {
	opts: {
		auth: true
	},
	method: "POST",
	url: "/users/:username/follow",
	optional: [
	]
},
	"/users/follow/remove": {
	opts: {
		auth: true
	},
	method: "DELETE",
	url: "/users/:username/follow",
	optional: [
	]
},
	"/users/followers": {
	opts: {
		auth: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/followers",
	optional: [
	]
},
	"/users/following": {
	opts: {
		auth: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/following",
	optional: [
	]
},
	"/users/friends": {
	opts: {
		auth: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/friends",
	optional: [
	]
},
	"/users/history": {
	opts: {
		auth: "optional",
		pagination: true,
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/history/:type/:item_id?start_at=&end_at=",
	optional: [
		"type",
		"item_id",
		"start_at",
		"end_at"
	]
},
	"/users/ratings": {
	opts: {
		auth: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/ratings/:type/:rating",
	optional: [
		"rating",
		"type"
	]
},
	"/users/watchlist": {
	opts: {
		auth: "optional",
		pagination: "optional",
		extended: [
			"full"
		]
	},
	method: "GET",
	url: "/users/:username/watchlist/:type",
	optional: [
		"type"
	]
},
	"/users/watching": {
	opts: {
		auth: "optional"
	},
	method: "GET",
	url: "/users/:username/watching",
	optional: [
	]
},
	"/users/watched": {
	opts: {
		auth: "optional",
		extended: [
			"full",
			"noseasons"
		]
	},
	method: "GET",
	url: "/users/:username/watched/:type",
	optional: [
	]
},
	"/users/stats": {
	opts: {
		auth: "optional"
	},
	method: "GET",
	url: "/users/:username/stats",
	optional: [
	]
}
};

var defaultUrl = 'https://api.trakt.tv';
var redirectUrn = 'urn:ietf:wg:oauth:2.0:oob';
var defaultUa = "trakt.tv-browser/7.2.0 (https://github.com/sharkykh/trakt.tv-browser)";

var Trakt =
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
    }
  }, {
    key: "_uaHeader",
    value: function _uaHeader() {
      return  {};
    } // Authentication calls

  }, {
    key: "_exchange",
    value: function _exchange(str) {
      var _this2 = this;

      var req = {
        method: 'POST',
        url: "".concat(this._settings.endpoint, "/oauth/token"),
        headers: Object.assign(this._uaHeader, {
          'Content-Type': 'application/json'
        }),
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
        headers: Object.assign(this._uaHeader, {
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          token: this._authentication.access_token,
          client_id: this._settings.client_id,
          client_secret: this._settings.client_secret
        })
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
        headers: Object.assign(this._uaHeader, {
          'Content-Type': 'application/json'
        }),
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
        headers: Object.assign(this._uaHeader, {
          'Content-Type': 'application/json',
          'trakt-api-version': '2',
          'trakt-api-key': this._settings.client_id
        }),
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
        return sanitizer.sanitize(string);
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

module.exports = Trakt;
