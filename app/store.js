
import { createStore, compose } from 'redux'
import reducer from './reducers'
import middleware from './middleware'

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(
    reducer,
    compose( middleware, devTools)
)

export default store
