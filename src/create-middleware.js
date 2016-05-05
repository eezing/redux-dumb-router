
import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'

export default function createMiddleware(history) {

    let dispatch = null

    const historyListener = store => {

        dispatch = store.dispatch

        history.listen(location => {
            dispatch(actionCreators.change(location))
        })
    }

    return store => next => action => {

        next(action)

        if (action.type === actionTypes.GOTO) {
            history.push(action.pathname)
        }

        if (action.type === actionTypes.REPLACE) {
            history.replace(action.pathname)
        }

        if (action.type === actionTypes.START) {
            if (!dispatch) historyListener(store)
        }
    }
}
