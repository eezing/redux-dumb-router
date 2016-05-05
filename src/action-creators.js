
import * as actionTypes from './action-types'

export function start() {
    return { type: actionTypes.START }
}

export function change(location) {
    return { type: actionTypes.CHANGE, location }
}

export function goto(pathname) {
    return { type: actionTypes.GOTO, pathname }
}

export function replace(pathname) {
    return { type: actionTypes.REPLACE, pathname }
}
