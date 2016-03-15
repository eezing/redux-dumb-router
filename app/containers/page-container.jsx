
import React from 'react'

export default function(Component) {
    return React.createClass({
        componentDidMount: function() {
            const location = this.props.location
            const y = location.state ? location.state.scrollY || 0 : 0
            window.scroll(0, y)
        },

        render: function() {
            return (
                <Component {...this.props} />
            )
        }
    })
}
