## redux-dumb-router

#### Step 1 - Reducer

```
import { reducer as router } from 'redux-dumb-router' // <-- a. import reducer as [some name you choose]

```

#### Step 2 - Middleware

```
import createHistory from 'history/lib/createBrowserHistory' // <-- a. import createHistory

import { createRouterMiddleware } from 'redux-dumb-router' // <-- b. import createRouterMiddleware


const history = createHistory() // <-- c. create history

const routerMiddleware = createRouterMiddleware(history) // <-- d. create middleware with history

```

#### Step 3 - Dispatch start action

```
import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


store.dispatch(routerActionCreators.start()) // <-- c. dispatch start action


/*

What happens:

Pathname in URL: '/home'

-- store before --->  {}
-- action start --->  { type: 'redux-dumb-router/start' }
-- store ---------->  {}
-- action change -->  { type: 'redux-dumb-router/change', pathname: '/home' }
-- store ---------->  { pathname: '/home' }

*/

```

#### Step 4 - Dispatch goto action

```
import store from './your-store.js' // <-- a. your store

import { routerActionCreators } from 'redux-dumb-router' // <-- b. import action creators


const pathname = '/about' // <-- c. Specify a target pathname

store.dispatch(routerActionCreators.goto(pathname)) // <-- d. dispatch goto action with target pathname


/*

What happens:

-- store before --->  { pathname: '/home' }
-- action goto ---->  { type: 'redux-dumb-router/goto', pathname: '/about' }
-- store ---------->  { pathname: '/home', next: '/about' }
-- action change -->  { type: 'redux-dumb-router/change', pathname: '/about' }
-- store ---------->  { pathname: '/home' }

*/

```
