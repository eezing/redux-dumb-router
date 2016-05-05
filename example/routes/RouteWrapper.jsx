
import React from 'react'

export default function(Component) {
    return React.createClass({
		
        componentDidMount: function() {
			if (this.props.location.action === 'POP') return
            window.scroll(0, 0)
        },

        render: function() {
            return (
                <Component {...this.props} />
            )
        }
    })
}
