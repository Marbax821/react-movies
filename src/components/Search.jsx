import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={search}
                    onChange={(e) =>
                        setSearch({ search: e.target.value })
                    }
                />
            </div>
        </div>
    );
}

export { Search };