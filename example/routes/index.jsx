
import React from 'react'
import { connect } from 'react-redux'
import Handler from '../../src/handler/react'
import Error404 from '../modules/Error/404.jsx'

import About from './About.jsx'
import Blog from './Blog.jsx'
import Home from './Home.jsx'

export default connect(mapState)(render)

function mapState(state) {
    return {
        location: state.router.location
    }
}

function render(props) {
	return (
		<Handler
			routes={{
				'/': Home,
				'/home': Home,
				'/about': About,
				'/blog': Blog
			}}
			notFound={Error404}
			location={props.location}
		/>
	)
}
