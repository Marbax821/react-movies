import { Movie } from "./Movie";

function Movies(props) {
    const { movies } = props;

    return (
        <div className="movies">
            {movies.map(item => {
                return <Movie key={item.imdbID} {...item} />
            })}
        </div>
    );
}

export { Movies };