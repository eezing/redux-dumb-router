import React from 'react'

export default React.createClass({
    PropTypes: {
        errorType: React.PropTypes.String
    },
    render: render
})

const errors = {
    '/404': { header: '404', body: 'Content at this URL could Not be Found' },
    'default': { header: 'General', body: 'Error on page' }
}

function render() {

    const error = errors[this.props.errorType] || errors.default

    return (
        <div className="container">
            <div className="card card-danger card-inverse">
              <div className="card-block">
                <h4 className="card-title">Error - {error.header}</h4>
                <p className="card-text">{error.body}</p>
              </div>
            </div>
        </div>
    )
}
