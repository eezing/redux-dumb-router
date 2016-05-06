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
// store.js

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
// app.js

import { routerActionCreators } from 'redux-dumb-router'
import store from './store.js'

store.dispatch(routerActionCreators.start())

let state = store.getState()

// state = { router: { location: { pathname: [pathname of current URL] ... }}}
```

#### Step 3. Dispatch GOTO action to push new location

```javascript
// app.js

store.dispatch(routerActionCreators.goto('/blog'))

let state = store.getState()

// state = { router: { location: { pathname: '/blog' ... }}}
```
