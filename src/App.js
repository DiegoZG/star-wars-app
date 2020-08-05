import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import MovieContainer from './MovieContainer';
import Movie from './Movie';
import { render } from '@testing-library/react';
import { Container } from 'semantic-ui-react'

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then(json => {
      this.setState({
        movies: json.results}
      )
    })
  }

  render() { 
    return (
      <div className="App">
        <NavBar />
        <Container>
          <MovieContainer movies={this.state.movies}/>
        </Container>
      </div>
    );
  }
}

export default App;
