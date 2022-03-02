import { useState, useEffect } from "react";

function App() {

  const [ allPokemons, setAllPokemons ] = useState([]);
  const [ showMore, setShowMore ] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(showMore)
    const data = await res.json()

    setShowMore(data.next)
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
