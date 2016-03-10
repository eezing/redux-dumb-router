## redux-dumb-router

**Experimental - Expect breaking changes**

A simple routing solution for [reactjs/redux](https://github.com/reactjs/redux). Essentially, it's just lightweight middleware to bridge redux to [reactjs/history](https://github.com/reactjs/history).

- Issue a route change with a dispatch action
- Router state in redux store
- Catch route changes with middleware

---

### Get Started

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

/*

Flow:

--> state: {} (empty)
--> dispatch action: { type: actionTypes.START }
--> middleware creates history listener
--> history POPS current location
--> history listener dispatches action: { type: actionTypes.CHANGE, pathname: [of current location], location: [location obj] }
--> state: { pathname: [of current location], location: [location obj] }

*/

```

#### Step 4 - Dispatch goto action

```javascript

import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


const pathname = '/about' // <-- c. Specify a target pathname

store.dispatch(routerActionCreators.goto(pathname)) // <-- d. dispatch goto action with target pathname

/*

Flow:

--> state: { pathname: '/home', location: [location obj] }
--> dispatch action: { type: actionTypes.GOTO, pathname: '/about' }
--> middleware issues history.push(pathname)
--> state: { pathname: '/home', location: [location obj], next: '/about' }
--> history pushes new location
--> history listener dispatches action: { type: actionTypes.CHANGE, pathname: '/about', location: [location obj] }
--> state: { pathname: '/about', location: [location obj] }

*/

```

#### Step 5 - Dispatch replace action

```javascript

import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


const pathname = '/contact' // <-- c. Specify a target pathname

store.dispatch(routerActionCreators.replace(pathname)) // <-- d. dispatch replace action with target pathname

/*

Flow:

--> state: { pathname: '/home', location: [location obj] }
--> dispatch action: { type: actionTypes.REPLACE, pathname: '/contact' }
--> middleware issues history.push(pathname)
--> state: { pathname: '/home', location: [location obj], next: '/contact' }
--> history replaces location
--> history listener dispatches action: { type: actionTypes.CHANGE, pathname: '/contact', location: [location obj] }
--> state: { pathname: '/contact', location: [location obj] }

*/

```
