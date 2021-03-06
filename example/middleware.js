
import { applyMiddleware } from 'redux'
import { createHistory, useQueries } from 'history'
import { createRouterMiddleware } from '../src'

const history = useQueries(createHistory)()
const routerMiddleware = createRouterMiddleware(history)
const middleware = applyMiddleware(routerMiddleware)

export default middleware
