
import { combineReducers } from 'redux'
import app from './app'
import { reducer as router } from '../../src'

const reducer = combineReducers({ app, router })

export default reducer
