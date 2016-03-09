
import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'

export default function createMiddleware(history) {

    let dispatch = undefined

    const historyListener = store => {

        dispatch = store.dispatch

        history.listen(location => {
            dispatch(actionCreators.change(location.pathname, location))
        })
    }

    return store => next => action => {

        next(action)

        if (action.type === actionTypes.GOTO) {
            window.scroll(0, 0)
            history.push(action.pathname)
        }

        if (action.type === actionTypes.START) {
            if (!dispatch) historyListener(store)
        }
    }
}
