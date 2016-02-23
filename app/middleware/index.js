
import { applyMiddleware } from 'redux'
import logger from './logger'

import createHistory from 'history/lib/createBrowserHistory'
import { createRouterMiddleware } from '../../src'
import useScroll from 'scroll-behavior/lib/useStandardScroll'

const history = useScroll(createHistory)()
const routerMiddleware = createRouterMiddleware(history)
const middleware = applyMiddleware(logger, routerMiddleware)

export default middleware
