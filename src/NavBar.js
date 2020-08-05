import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div> 
                <div className={`ui inverted yellow menu`}>
                    <a className="item">
                        <h2 className="ui header">
                            <i className="file video icon" />
                            <div className="content">Star Wars Movies</div>
                        </h2>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar