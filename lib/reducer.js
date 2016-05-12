'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? { location: {} } : arguments[0];
    var action = arguments[1];


    switch (action.type) {

        case actionTypes.CHANGE:
            return { location: action.location };

        case actionTypes.GOTO:
            return (0, _assign2.default)({}, state, { next: action.pathname });

        case actionTypes.REPLACE:
            return (0, _assign2.default)({}, state, { next: action.pathname });

        default:
            return state;
    }
};

var _actionTypes = require('./action-types');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }