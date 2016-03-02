
import createMiddleware from './create-middleware'
import reducer from './reducer'
import * as actionTypes from './action-types'
import * as actionCreators from './action-creators'

export const routerActionTypes = actionTypes
export const routerActionCreators = actionCreators
export const createRouterMiddleware = createMiddleware
export const routerReducer = reducer
