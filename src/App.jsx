import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";


const pokemonList = [
  {
      id: 0,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 1,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 2,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: 3,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id: 4,
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  


  return (
    <>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    <NavBar key={pokemonList[pokemonIndex].id} funct={setPokemonIndex} array={pokemonList}/>
    
    </>
  )
}

export default App
