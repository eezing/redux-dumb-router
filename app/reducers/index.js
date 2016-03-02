
import { combineReducers } from 'redux'
import app from './app'
import { routerReducer as router } from '../../src'

const reducer = combineReducers({ app, router })

export default reducer
