
import createRouterMiddleware from './create-middleware'
import routerReducer from './reducer'
import * as routerActionTypes from './action-types'
import * as routerActionCreators from './action-creators'

export const actionTypes = routerActionTypes
export const actionCreators = routerActionCreators
export const createMiddleware = createRouterMiddleware
export const reducer = routerReducer
