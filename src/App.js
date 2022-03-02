import { useState, useEffect } from "react";
import PokemonBlock from './components/PokemonBlock'

function App() {

  const [ allPokemons, setAllPokemons ] = useState([]);
  const [ showMore, setShowMore ] = useState('https://pokeapi.co/api/v2/pokemon?limit=100')

  const getAllPokemons = async () => {
    const res = await fetch(showMore)
    const data = await res.json()

    setShowMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
  getAllPokemons()
  }, [])


  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) =>
              <PokemonBlock
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
          />)}
        </div>
      </div>
      <button className="show-more">Show More !</button>
    </div>
  );
}

export default App;
