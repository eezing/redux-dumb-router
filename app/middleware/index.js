
import { applyMiddleware } from 'redux'
import logger from './logger'

import { createHistory, useQueries } from 'history'
import { createRouterMiddleware } from '../../src'

const history = useQueries(createHistory)()
const routerMiddleware = createRouterMiddleware(history)
const middleware = applyMiddleware(logger, routerMiddleware)

export default middleware
