
import React from 'react'
import Wrapper from './Wrapper'

export default React.createClass({
    PropTypes: {
        routes: React.PropTypes.object.isRequired,
		location: React.PropTypes.object.isRequired,
		notFound: React.PropTypes.object.component
    },
    render: render
})

function render() {
	const Route = Wrapper(this.props.routes[location.pathname] || this.props.notFound)
	return <Route location={location} />
}
