
import React from 'react'
import { connect } from 'react-redux'
import { routerActionCreators } from '../../../src'
import Navbar from './Navbar'

export default connect(mapState, mapDispatch)(render)

function mapState(state) {
    return {
        active: state.router.location.pathname,
		navs: ['home', 'about', 'blog']
    }
}

function mapDispatch(dispatch) {
    return {
        goto: (nav) => dispatch(routerActionCreators.goto('/' + nav))
    }
}

function render(props) {
	return <Navbar {...props} />
}
