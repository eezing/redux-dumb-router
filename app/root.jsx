
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Main from './containers/main.jsx';
import { routerActionCreators } from '../index';

store.dispatch(routerActionCreators.start());

ReactDOM.render(
    <Provider store={ store }>
        <Main />
    </Provider>,
    document.getElementById('root')
)
