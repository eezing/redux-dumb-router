
import React from 'react'
import { connect } from 'react-redux'
import { routerActionCreators} from '../../src'

import Nav from '../components/nav.jsx'
import Home from '../components/home.jsx'
import About from '../components/about.jsx'
import Blog from '../components/blog.jsx'
import Error from '../components/error.jsx'

export default connect(mapState, mapDispatch)(render)

function mapState(state) {
    return {
        routerPathname: state.router.pathname
    }
}

function mapDispatch(dispatch) {
    return {
        routerGoto: (pathname) => dispatch(routerActionCreators.goto(pathname))
    }
}

function render(props) {

    const homeProps = {
        router: {
            pathname: props.routerPathname,
            goto: props.routerGoto
        }
    }

    return (
        <div>
            <Nav {...homeProps}/>
            { getContent(props.routerPathname) }
        </div>
    )
}

function getContent(pathname) {

    switch (pathname) {

        case '/':
            return (<Home />)

        case '/home':
            return (<Home />)

        case '/about':
            return (<About />)

        case '/blog':
            return (<Blog />)

        case undefined:
            return

        default:
            return (<Error errorType="/404" />)
    }
}
