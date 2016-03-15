
import React from 'react'
import { connect } from 'react-redux'
import { routerActionCreators} from '../../src'
import PageContainer from './page-container.jsx'

import Nav from '../components/nav.jsx'
import Home from '../components/home.jsx'
import About from '../components/about.jsx'
import Blog from '../components/blog.jsx'
import Error from '../components/error.jsx'

export default connect(mapState, mapDispatch)(render)

function mapState(state) {
    return {
        routerPathname: state.router.pathname,
        routerLocation: state.router.location
    }
}

function mapDispatch(dispatch) {
    return {
        routerGoto: (pathname) => dispatch(routerActionCreators.goto(pathname))
    }
}

function render(props) {

    const navProps = {
        router: {
            pathname: props.routerPathname,
            goto: props.routerGoto
        }
    }

    return (
        <div>
            <Nav {...navProps}/>
            { getContent(props.routerPathname, props.routerLocation) }
        </div>
    )
}

function getContent(pathname, location) {

    let Page = null

    switch (pathname) {

        case '/':
            Page = Home
            break;

        case '/home':
            Page = Home
            break;

        case '/about':
            Page = About
            break;

        case '/blog':
            Page = Blog
            break;

        case undefined:
            return

        default:
            return (<Error errorType="/404" />)
    }

    Page = PageContainer(Page)

    return (<Page location={location} />)
}
