'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.createMiddleware = exports.actionCreators = exports.actionTypes = undefined;

var _createMiddleware = require('./create-middleware');

var _createMiddleware2 = _interopRequireDefault(_createMiddleware);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actionTypes = require('./action-types');

var routerActionTypes = _interopRequireWildcard(_actionTypes);

var _actionCreators = require('./action-creators');

var routerActionCreators = _interopRequireWildcard(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionTypes = exports.actionTypes = routerActionTypes;
var actionCreators = exports.actionCreators = routerActionCreators;
var createMiddleware = exports.createMiddleware = _createMiddleware2.default;
var reducer = exports.reducer = _reducer2.default;