
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { routerActionCreators } from '../src'

import store from './store'
import Navbar from './modules/Navbar'
import Routes from './routes'

store.dispatch(routerActionCreators.start())

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Navbar />
			<Routes />
        </div>
    </Provider>,
    document.getElementById('root')
)
