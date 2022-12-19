import React from "react";
import MoviesList from "../MoviesList/MoviesList";

import './Main.scss';

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=2dcb9d1f&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return (
            <main className="main">
                {
                    movies.length ? (
                        <MoviesList movies={movies}/>
                    ) : <h5>Loading...</h5>
                }
            </main>
        )
    }
}

export default Main;