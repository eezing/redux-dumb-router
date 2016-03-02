
import { applyMiddleware } from 'redux'
import logger from './logger'

import createHistory from 'history/lib/createBrowserHistory'
import { createRouterMiddleware } from '../../src'

const history = createHistory()
const routerMiddleware = createRouterMiddleware(history)
const middleware = applyMiddleware(logger, routerMiddleware)

export default middleware
