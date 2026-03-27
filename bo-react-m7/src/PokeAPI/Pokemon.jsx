import styles from './Pokemon.module.css'
import { useState, useEffect } from 'react';

export function PokeAPI() {
    const randomNumber = Math.floor(Math.random() * 1025) + 1;
    const [pokemon, setPokemon] = useState(null);
    const [pokemonNumb, setPokemonNumb] = useState(randomNumber);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumb}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            });
    }, [pokemonNumb]);

    function newPokemon() {
        setPokemonNumb(randomNumber);
    }

    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <h2>Fetching Pokemon</h2>
            </section>
        )
    } else {
        return (
            <section className={styles.pokemon}>
                <h2 className={styles.name}>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <button className={styles.newPokemon} onClick={newPokemon}>Change Pokemon</button>
            </section>
        )
    }
}