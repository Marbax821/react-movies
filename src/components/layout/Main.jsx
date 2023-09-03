import { useState, useEffect } from 'react';
import { Movies } from '../Movies';
import { Search } from '../Search';
import Preloader from '../Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        fetch(`http://www.omdbapi.com/?apikey=73c2f3d1&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=73c2f3d1&s=matrix')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    )
}

export { Main }