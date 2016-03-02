
import * as actionTypes from './action-types'

export default function(state = {}, action) {

    switch (action.type) {

        case actionTypes.GOTO:
            return Object.assign({}, state, {
                next: action.pathname
            })

        case actionTypes.CHANGE:
            return Object.assign({}, {
                pathname: action.pathname
            })

        default:
            return state
    }
}
