
import { combineReducers } from 'redux';
import app from './app';
import { reducer as router } from '../../index';

const reducer = combineReducers({ app, router });

export default reducer;
