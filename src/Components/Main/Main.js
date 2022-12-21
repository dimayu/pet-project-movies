import React from "react";

import Search from "../Search/Search";
import MoviesList from "../MoviesList/MoviesList";
import Loader from "../Loader/Loader";

import './Main.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.log(err);
                this.setState({loading: false});
            })
    }

    searchMovies = (str, type = "all") => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className="main">
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Loader /> : <MoviesList movies={movies}/>}
            </main>
        )
    }
}

export default Main;