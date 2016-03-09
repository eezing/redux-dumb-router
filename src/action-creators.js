
import * as actionTypes from './action-types'

export function start() {
    return { type: actionTypes.START }
}

export function goto(pathname) {
    return { type: actionTypes.GOTO, pathname }
}

export function change(pathname, location) {
    return { type: actionTypes.CHANGE, pathname, location }
}
