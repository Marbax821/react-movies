import React, { useState, useEffect } from 'react';
import { Movies } from '../Movies';
import Preloader from '../Preloader';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=73c2f3d1&s=matrix')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
    }, {});

    return (
        <main className="container content">
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    )
}

export { Main }