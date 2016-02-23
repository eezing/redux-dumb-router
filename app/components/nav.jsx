
import React from 'react';

export default React.createClass({
    render: render
})

function render() {

    const links = ['home', 'about', 'blog']

    return (
        <div className="container">
            <nav className="navbar navbar-fixed-top navbar-light bg-faded">
                {
                    links.map(item => {
                        return (
                            <button key={item} className="btn btn-secondary" style={{ marginRight: '1em' }} onClick={ () => this.props.router.goto('/' + item) }>{item}</button>
                        )
                    })
                }
            </nav>
        </div>
    )
}
