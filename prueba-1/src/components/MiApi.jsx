import React, { useState, useEffect } from 'react';

function MiApi({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null)

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=54";

    const getData = async () => {
        try {
            const res = await fetch(url);

            if(!res.ok){
                throw {
                    err: true,
                    status: res.status,
                    statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
                }
            }

            const data = await res.json();
    
            const pokemonDetails = [];
    
            for (const pokemonData of data.results) {
                const res = await fetch(pokemonData.url);
                const pokemonDetail = await res.json();
                pokemonDetails.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    avatar: pokemonDetail.sprites.front_default
                });
            }

            pokemonDetails.sort((a, b) => a.name.localeCompare(b.name));
    
            setPokemons(pokemonDetails);
        } catch (err) {
            setError(err)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
          {children(pokemons, error)}
        </>
    )
}
export default MiApi