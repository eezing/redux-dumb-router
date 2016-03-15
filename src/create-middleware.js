
import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'

export default function createMiddleware(history) {

    let dispatch = null
    let currentLocation = null
    let pending = null

    const historyListener = store => {

        dispatch = store.dispatch

        history.listen(location => {
            if (pending) return pending()
            currentLocation = location
            dispatch(actionCreators.change(location.pathname, location))
        })
    }

    return store => next => action => {

        next(action)

        if (action.type === actionTypes.GOTO) {

            pending = () => {
                pending = null
                history.push(action.pathname)
            }

            history.replace({ pathname: currentLocation.pathname, state: { scrollY: window.scrollY } })
        }

        if (action.type === actionTypes.REPLACE) {
            history.replace(action.pathname)
        }

        if (action.type === actionTypes.START) {
            if (!dispatch) historyListener(store)
        }
    }
}
