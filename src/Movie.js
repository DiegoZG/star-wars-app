import React from 'react';
import { Button } from 'semantic-ui-react';
import Character from './Character';
import Planet from './Planet';
import images from './images.js'

class Movie extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showCharacters: false,
            showPlanets: false
        }
    }

    toggleCharacterState = () => {
        this.setState({
            showCharacters: !this.state.showCharacters
        })
    }

    showCharacters = () => {
        let characters = this.props.characters.map(character => {
            return (<Character url={character}/>)
        })
        return (
            <div style={{display: 'inline-block', verticalAlign: 'top'}}> 
                <h4>Characters</h4>
                <ul>
                    {characters}
                </ul>
            </div>
        )
    }

    togglePlanetState = () => {
        this.setState({
            showPlanets: !this.state.showPlanets
        })
    }

    showPlanets = () => {
        let planets = this.props.planets.map(planet => {
            return (<Planet url={planet}/>)
        })
        return (
            <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <h4>Planets</h4>
                <ul>
                    {planets}
                </ul>
            </div>
        )
    }

    render() {
        return(
            <div style={{textAlign: 'left', paddingBottom: '20px', display: 'inline-block'}}>
                <h2 style={{textAlign: 'center'}}>{this.props.title}</h2>
                <img src={images[this.props.movieId]} style={{float: 'left'}} />
                <div style={{overflow: 'hidden', padding: '10px'}}>
                    <ul>
                        <li>Release Date: {this.props.releaseDate}</li>
                        <li>Director: {this.props.director}</li>
                        <li>Producer: {this.props.producer}</li>
                    </ul>
                    <p>{this.props.openingCrawl}</p>
                
                <div style={{padding: '10px'}}>
                    <Button 
                        color='yellow' 
                        onClick={this.toggleCharacterState}
                        content='Characters' 
                    />
                    <Button 
                        color='yellow' 
                        onClick={this.togglePlanetState}
                        content='Planets'
                    />
                </div>
                
                {this.state.showCharacters ? this.showCharacters() : null}
                {this.state.showPlanets ? this.showPlanets() : null}
                </div>
            </div>
        )
    }
}

export default Movie