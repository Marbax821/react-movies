import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? movies.map(item => (
                <Movie key={item.imdbID} {...item} />
            )) : <h3>Nothing found</h3>}
        </div>
    );
}

export { Movies };