import { useState } from "react";

const Search = ({ searchMovies }) => {
    const [search, setSearch] = useState('matrix');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (event) => {
        const selectedType = event.target.dataset.type;
        setType(selectedType);
        searchMovies(search, selectedType);
    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn"
                    onClick={() => searchMovies(search, type)}
                >
                    Search
                </button>
            </div>
            <div className="row">
                <label>
                    <input
                        className="with-gap" 
                        name="type" 
                        data-type="all" 
                        type="radio"
                        onChange={handleFilter}
                        checked={type === 'all'} />
                    <span>All</span>
                </label>
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        data-type="movie" 
                        type="radio"
                        onChange={handleFilter}
                        checked={type === 'movie'} />
                    <span>Movies only</span>
                </label>
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        data-type="series" 
                        type="radio"
                        onChange={handleFilter}
                        checked={type === 'series'} />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    );
}

export { Search };