import React from 'react';
import Movie from './Movie';



// function MovieContainer(props){
//     return(<div>
//         {props.movies.map(movie => <Movie />)}
//     </div>)
// }
class MovieContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    mapAllMovies = () => {
        let movies = this.props.movies.map(movie => {
            return (
                <Movie 
                    title={movie.title}
                    releaseDate={movie.release_date}
                    director={movie.director}
                    openingCrawl={movie.opening_crawl}
                    characters={movie.characters}
                    planets={movie.planets}
                    producer={movie.producer}
                    movieId={movie.episode_id}
                />
            )
        })
        return movies
    }

    render() {
        return (
            <div>
                <h1>Star Wars Movies</h1>
                {this.mapAllMovies()}
            </div>
        )
    }
}

export default MovieContainer