# redux-dumb-router

A simple routing solution for [reactjs/redux](https://github.com/reactjs/redux).

Essentially, it's just lightweight middleware to bridge redux to [mjackson/history](https://github.com/mjackson/history).

- Issue a route change with a dispatch action
- Router state in redux store
- Catch route changes with middleware

#### -- Experimental Package - Expect breaking changes --

[![Build Status](https://travis-ci.org/eezing/redux-dumb-router.svg?branch=master)](https://travis-ci.org/eezing/redux-dumb-router) [![npm version](https://badge.fury.io/js/redux-dumb-router.svg)](https://badge.fury.io/js/redux-dumb-router)
---

## Get Started

#### Step 1 - Reducer

```javascript

import { routerReducer as router } from 'redux-dumb-router' // <-- a. import router reducer as [some name you choose]

```

#### Step 2 - Middleware

```javascript

import createHistory from 'history/lib/createBrowserHistory' // <-- a. import create history

import { createRouterMiddleware } from 'redux-dumb-router' // <-- b. import create middleware


const history = createHistory() // <-- c. create history

const routerMiddleware = createRouterMiddleware(history) // <-- d. create middleware with history

```

#### Step 3 - Dispatch start action

```javascript

import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


store.dispatch(routerActionCreators.start()) // <-- c. dispatch start action

```

---

## Change route action-creators

#### Dispatch goto action

```javascript

import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


const pathname = '/about' // <-- c. Specify a target pathname

store.dispatch(routerActionCreators.goto(pathname)) // <-- d. dispatch goto action with target pathname

```

#### Dispatch replace action

```javascript

import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


const pathname = '/contact' // <-- c. Specify a target pathname

store.dispatch(routerActionCreators.replace(pathname)) // <-- d. dispatch replace action with target pathname

```
