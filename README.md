# redux-dumb-router

A simple minded routing solution for reactjs/redux

Essentially, it's just lightweight middleware to bridge redux to [mjackson/history](https://github.com/mjackson/history).

- Issue a location change with a dispatch action
- Location state in redux store
- Catch location changes with middleware

[![Build Status](https://travis-ci.org/eezing/redux-dumb-router.svg?branch=master)](https://travis-ci.org/eezing/redux-dumb-router) [![npm version](https://badge.fury.io/js/redux-dumb-router.svg)](https://badge.fury.io/js/redux-dumb-router)

---

## Get Started

#### Step 1. Create a redux store and include redux-dumb-router

```javascript
/* store.js */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createHistory } from 'history'
import { createRouterMiddleware } from 'redux-dumb-router'
import { routerReducer as router } from 'redux-dumb-router'

const history = createHistory()
const routerMiddleware = createRouterMiddleware(history)

const middleware = applyMiddleware(routerMiddleware)
const reducer = combineReducers({ router })

const store = createStore(reducer, middleware)

export default store
```

#### Step 2. Dispatch START action to start history listener

```javascript
/* app.js */

import { routerActionCreators } from 'redux-dumb-router'
import store from './store.js'

store.dispatch(routerActionCreators.start())

let state = store.getState()

// state.router = { location: { pathname: [pathname of current URL] ... }}
```

#### Step 3. Dispatch GOTO action to push a new location

```javascript
/* app.js */

store.dispatch(routerActionCreators.goto('/blog'))

let state = store.getState()

// state.router = { location: { pathname: '/blog' ... }}
```

---

## Use with REACT

** Note: ** This assumes you've completed Step 1 of "Get Started" above.

#### Step 1. Setup your root.jsx with react-redux

```javascript
/* root.jsx */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { routerActionCreators } from '../src'

import store from './store.js'
import Routes from './routes.jsx'

store.dispatch(routerActionCreators.start())

ReactDOM.render(
    <Provider store={store}>
		<Routes />
    </Provider>,
    document.getElementById('root')
)
```

#### Step 2. Create a route container

```javascript
/* routes.jsx */

import React from 'react'
import { connect } from 'react-redux'

// -- route components --
import Home from './Home.jsx'
import About from './About.jsx'
import Blog from './Blog.jsx'
import NotFound from './NotFound.jsx'

export default connect(mapState)(render)

function mapState(state) {
    return {
        location: state.router.location
    }
}

function render(props) {

	switch (props.location.pathname) {

		case '/':
			return <Home />

		case '/home':
			return <Home />

		case '/about':
			return <About />

		case '/blog':
			return <Blog />			

		default:
			return <NotFound />
	}
}
```

---

## Get Frisky

Take a look at the source (specifically src/create-middleware.js). You'll discover additional functionality to do stuff like:

- Create middleware to catch GOTO actions (before history push)
- Create middleware to catch CHANGE actions (after history push, pull, replace)
- Use pre-built handlers (e.g. src/handler/react)
