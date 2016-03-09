'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMiddleware;

var _actionCreators = require('./action-creators');

var actionCreators = _interopRequireWildcard(_actionCreators);

var _actionTypes = require('./action-types');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createMiddleware(history) {

    var dispatch = undefined;

    var historyListener = function historyListener(store) {

        dispatch = store.dispatch;

        history.listen(function (location) {
            dispatch(actionCreators.change(location.pathname, location));
        });
    };

    return function (store) {
        return function (next) {
            return function (action) {

                next(action);

                if (action.type === actionTypes.GOTO) {
                    window.scroll(0, 0);
                    history.push(action.pathname);
                }

                if (action.type === actionTypes.START) {
                    if (!dispatch) historyListener(store);
                }
            };
        };
    };
}