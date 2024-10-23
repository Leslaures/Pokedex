import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  function handleClickPokemonIndexPrécédent () {
    if (pokemonIndex > 0) {
    setPokemonIndex (pokemonIndex - 1)};
  }

  function handleClickPokemonIndexSuivant () {
    if (pokemonIndex < (pokemonList.length)-1) {
      setPokemonIndex (pokemonIndex +1)};
  }

  return (
    <>
    <div>
      <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc}/>
    </div>
    <button type="button" onClick={handleClickPokemonIndexPrécédent}>Précédent</button>
    <button type="button" onClick={handleClickPokemonIndexSuivant}>Suivant</button>
    </>
  );
}

export default App;