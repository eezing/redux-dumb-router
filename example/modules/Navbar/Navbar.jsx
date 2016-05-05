import React from 'react'

export default React.createClass({
    render: render,
	shouldComponentUpdate
})

function render() {
    return (
        <div className="container">
            <nav className="navbar navbar-fixed-top navbar-light bg-faded">
                {
                    this.props.navs.map(item => {
                        return (
                            <button
								key={item}
								className={ this.props.active === '/' + item ? 'btn btn-secondary active' : 'btn btn-secondary'}
								style={{ marginRight: '1em' }}
								onClick={ (e) => { e.target.blur(); this.props.goto(item); }}>
								{item}
							</button>
                        )
                    })
                }
            </nav>
        </div>
    )
}

function shouldComponentUpdate(nextProps) {
	return this.props.active !== nextProps.active
}
