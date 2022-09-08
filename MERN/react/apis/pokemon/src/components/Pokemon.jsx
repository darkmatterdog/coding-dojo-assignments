import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  
  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
      console.log(response.data)
      setPokemon(response.data.results)
    })
    .catch((err) => {
      console.log(err);
    })
  }

    return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>{pokemon.length > 0 && pokemon.map((monster, i) => {
        return(<li key={i}>{monster.name}</li>)
      })}</ul>
    </div>
  )
}
  
export default Pokemon