
import { POP } from 'history/lib/Actions'
import doScroll from './do-scroll'
import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'

export default function createMiddleware(history) {

    let dispatch, currentLocation

    const historyListener = store => {

        dispatch = store.dispatch

        history.listen(location => {
            if (location.action === POP) return dispatch(actionCreators.change(location.pathname))
            doScroll(0, () => dispatch(actionCreators.change(location.pathname)))
        })
    }

    return store => next => action => {

        next(action)

        if (action.type === actionTypes.GOTO) {
            history.push(action.pathname)
        }

        if (action.type === actionTypes.START) {
            if (!dispatch) historyListener(store)
        }
    }
}
