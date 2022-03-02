import { useState } from "react";

function App() {

  const [ allPokemons, setAllPokemons ] = useState([]);
  const [ showMore, setShowMore ] = useState('https://pokeapi.co/api/v2/pokemon?limit=100')

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
