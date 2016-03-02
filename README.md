## redux-dumb-router

**Experimental - Expect breaking changes**

A simple routing solution for [reactjs/redux](https://github.com/reactjs/redux). Essentially, it's just lightweight middleware to bridge redux to [reactjs/history](https://github.com/reactjs/history).

- Issue a route change with a dispatch action
- Router state in redux store
- Catch route changes with middleware

**Notes:**
- window.scroll(0, 0) is executed on action.GOT0 for scroll to top behavior. Using this until a more elegant solution presents itself. May make this optional if required.

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
--> history listener dispatches action: { type: actionTypes.CHANGE, pathname: [of current location] }
--> state: { pathname: [of current location] }

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

--> state: { pathname: '/home' }
--> dispatch action: { type: actionTypes.GOTO, pathname: '/about' }
--> middleware issues history.push(pathname)
--> state: { pathname: '/home', next: '/about' }
--> history pushes new location
--> history listener dispatches action: { type: actionTypes.CHANGE, pathname: '/about' }
--> state: { pathname: '/about' }

*/

```
