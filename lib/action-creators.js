'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.start = start;
exports.change = change;
exports.goto = goto;
exports.replace = replace;

var _actionTypes = require('./action-types');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function start() {
    return { type: actionTypes.START };
}

function change(location) {
    return { type: actionTypes.CHANGE, location: location };
}

function goto(pathname) {
    return { type: actionTypes.GOTO, pathname: pathname };
}

function replace(pathname) {
    return { type: actionTypes.REPLACE, pathname: pathname };
}