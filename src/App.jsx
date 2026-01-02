import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=8");

    const details = await Promise.all(
      res.data.results.map(p => axios.get(p.url).then(r => r.data))
    );

    setPokemons(details);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        Pokédex
      </h1>

      <div className="flex justify-center mb-8">
        <button
          onClick={getData}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          Load Pokémon
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
