
import createMiddleware from './src/create-middleware';
import routerReducer from './src/router-reducer';
import * as actionTypes from './src/action-types';
import * as actionCreators from './src/action-creators';

export const routerActionTypes = actionTypes;
export const routerActionCreators = actionCreators;
export const createRouterMiddleware = createMiddleware;
export const reducer = routerReducer;
