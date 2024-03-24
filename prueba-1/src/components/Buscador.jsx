import React from 'react'
import { useState } from 'react';

function Buscador({pokemons, error}){

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    let results = [];

    if (!search) {
        results = pokemons;
    } else {
        results = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    return(
        <>
            <input
            type="text"
            placeholder="Buscar Pokémon"
            value={search}
            onChange={handleSearch}
            className="pokemon-font"
            />

            { error && <p className='pokemon-font'>Error: {error.statusText}</p>}

            <div className="pokemon-grid">
                {results.map((pokemon) => (
                    <figure key={pokemon.id} className="pokemon-cell">
                        <img src={pokemon.avatar} alt={pokemon.name} className="img-fluid" />
                        <figcaption className="pokemon-font">{pokemon.name}</figcaption>
                    </figure>
                ))}
            </div>
        </>
    )
}
export default Buscador