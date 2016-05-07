import React from 'react'

export default React.createClass({
    PropTypes: {
        errorType: React.PropTypes.String
    },
    render: render
})

function render() {
    return (
        <div className="container">
            <div className="card card-danger card-inverse">
              <div className="card-block">
                <h4 className="card-title">Error - 404</h4>
                <p className="card-text">Content at this URL could Not be Found</p>
              </div>
            </div>
        </div>
    )
}
