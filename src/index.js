
import createMiddleware from './create-middleware';
import routerReducer from './router-reducer';
import * as actionTypes from './action-types';
import * as actionCreators from './action-creators';

export const routerActionTypes = actionTypes;
export const routerActionCreators = actionCreators;
export const createRouterMiddleware = createMiddleware;
export const reducer = routerReducer;
