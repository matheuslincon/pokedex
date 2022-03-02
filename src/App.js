import { useState, useEffect } from "react";

function App() {

  const [ allPokemons, setAllPokemons ] = useState([]);
  const [ showMore, setShowMore ] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

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

      </div>
      <button className="show-more">Show More !</button>
    </div>
  );
}

export default App;
