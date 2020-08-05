import React from 'react'
import { render } from '@testing-library/react'


class Character extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null
        }
    }

    componentDidMount(){
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                  name: data.name 
            })
        })
    }

    render(){
        return(
            <li>{this.state.name}</li>
        )
    }
}

export default Character