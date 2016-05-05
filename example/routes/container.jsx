
import React from 'react'
import { connect } from 'react-redux'
import RouteWrapper from './RouteWrapper.jsx'

import About from './About.jsx'
import Blog from './Blog.jsx'
import Error404 from './Error404.jsx'
import Home from './Home.jsx'

export default connect(mapState)(render)

function mapState(state) {
    return {
        location: state.router.location
    }
}

function render(props) {

	let Route = null

	switch (props.location.pathname) {

		case '/':
            Route = Home
			break

		case '/home':
			Route = Home
			break

        case '/blog':
			Route = Blog
			break

		case '/about':
			Route = About
			break

        default:
            Route = Error404
    }

	Route = RouteWrapper(Route)

	return <Route location={props.location} />
}
