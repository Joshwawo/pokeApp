import "./App.css";
import Pokeapp from "./components/Pokeapp";
import { useState, useEffect } from "react";

function App() {
  // const [number, setNumber] = useState(1);
  // const [pokemon, setPokemon] = useState({});
  // const randomNumber = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  // const handleClick = () => {
  //   setNumber(randomNumber(1, 151));
  // };

  // const fetchData = async (id) => {
  //   try {
  //     const response = await fetch(
  //       // `https://pokeapi.co/api/v2/pokemon/${number}`
  //       `https://pokeapi.co/api/v2/pokemon/${id}`
  //     );
  //     const data = await response.json();
  //     setPokemon(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // console.log(number);

  // }

  // useEffect(() => {
  //   fetchData(number);
  // }, [number]);

  // console.log(pokemon.base_experience);
  // console.log(pokemon.stats[0].base_stat);
  // useEffect(() => {
  //   const fetchData = async (id) => {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  //     const data = await response.json();
  //     setPokemon(data);
  //     // console.log(data.stats[0].base_stat);
  //   };
  //   fetchData(2);
  // }, []);

  // console.log(pokemon.stats === undefined ? ' ': pokemon.stats[0].base_stat);
  // console.log(pokemon.sprites === undefined ? ' ': pokemon.sprites.other.dream_world.front_default);
  // sprites.other.dream_world.front_default




  // console.log(pokemon.stats[0].base_stat + "Segundo clg");

  return (
    <div className=" ">
      <Pokeapp />
      {/* <h1>Holas</h1>
       <h1>El numero es: {number}</h1>
      <p>Mi nomnre es: {pokemon.name}</p>
      <img src={pokemon.sprites === undefined ? ' ': pokemon.sprites.other.dream_world.front_default} alt="" className="mx-auto" />
      <button onClick={handleClick}>Generar Pokemon Aleatorio</button> */}
    </div>
  );
}

export default App;
