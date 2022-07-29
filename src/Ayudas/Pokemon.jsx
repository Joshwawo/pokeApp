import { useState, useEffect } from "react";
import { Comparador, Comparador2 } from "./Comparador";
import Spinner from "./Spinner";
import axios from "axios";

const Pokeapp = () => {
  const [number, setNumber] = useState(1);
  const [pokemon, setPokemon] = useState({});
  const [cargando, setCargando] = useState(true);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleClick = () => {
    setNumber(randomNumber(1, 650));
  };

  const getPokemon = async () => {
    setCargando(true);
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    const res = await axios.get(url, {
      language: "es",
    });
    setPokemon(res.data);
    setCargando(false);
  };
  useEffect(() => {
    getPokemon();
  }, [number]);

  // const fetchData = async (id) => {
  //   try {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     const data = await response.json();
  //     setPokemon(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setCargando(false);
  // };

  // useEffect(() => {
  //   fetchData(number);
  // }, [number]);

  let stats =
    pokemon.stats === undefined
      ? ""
      : pokemon.stats.map((stat) => {
          return stat.base_stat;
        });
  // console.log(pokemon.types);

  const objPokemon = {
    name: pokemon.name,
    id: pokemon.id,
    weight: pokemon.weight,
    height: pokemon.height,
    base_experience: pokemon.base_experience,
    stats: pokemon.stats,
    types: pokemon.types,
  };
  // console.log(  objPokemon.types.length )

  // let tipo2 =  pokemon.types === undefined ? '' : types[1].type.name
  const { name, weight, height, types, id } = objPokemon;
  let tipo1 = types === undefined ? "" : types[0].type.name;
  // let tipo2 = types === undefined ? '' : types[1].type.name
  // console.log(tipo2)
  // console.log(types[1] === undefined ? '' : types[1].type.name)
  let tipo2 = Object.keys(types).length > 1 && types[1].type.name;
  // console.log(tipo2)
  // Object.keys(types)
  // console.log(types === undefined ? '' : types.length);
  //  console.log(tipo1)
  //   console.log(tipo2)

  // console.log(tipo1)
  return cargando ? (
    <Spinner />
  ) : (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        {/* <img
          className="mx-auto"
          src={
            pokemon.sprites === undefined
              ? " "
              : pokemon.sprites.other.dream_world.front_default
          }
          alt="Aqui iria un pokemon"
        /> */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`}
          alt={name}
        />
       
        <img
          src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo2}.svg`}
          alt=""
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 uppercase">{name}</div>
          <div className="flex justify-evenly">
            <p className="text-gray-400 text-center">Weight: {weight}</p>
            <p className="text-gray-400 text-center">height: {height}</p>
            <p className="text-gray-400 text-center">My id es: {id}</p>
          </div>
          {stats.map((stat, i) => {
            return (
              <div
                key={i}
                className="flex justify-between gap-1 div:delosmalotes:"
              >
                <p
                  className={` text-base ${
                    pokemon.stats[i].stat.name == "hp"
                      ? "text-red-500"
                      : pokemon.stats[i].stat.name == "attack"
                      ? " text-orange-500"
                      : pokemon.stats[i].stat.name == "defense"
                      ? "text-blue-500"
                      : pokemon.stats[i].stat.name == "special-attack"
                      ? "text-purple-500"
                      : pokemon.stats[i].stat.name == "special-defense"
                      ? "text-yellow-500"
                      : pokemon.stats[i].stat.name == "speed"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  {" "}
                  {pokemon.stats[i].stat.name}{" "}
                </p>
                <span className="-"></span>
                <p
                  className={`text-gray-700 text-base ${
                    pokemon.stats[i].stat.name == "hp"
                      ? "text-red-600"
                      : pokemon.stats[i].stat.name == "attack"
                      ? " text-orange-600"
                      : pokemon.stats[i].stat.name == "defense"
                      ? "text-blue-600"
                      : pokemon.stats[i].stat.name == "special-attack"
                      ? "text-purple-600"
                      : pokemon.stats[i].stat.name == "special-defense"
                      ? "text-yellow-600"
                      : pokemon.stats[i].stat.name == "speed"
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {" "}
                  {pokemon.stats[i].base_stat}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <div className="px-6 pt-4 pb-2">
          <Comparador className="bg-red-200">{types[0].type.name}</Comparador>
          {Object.keys(types).length > 1 && (
            <Comparador2>{types[1].type.name}</Comparador2>
          )}
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          </span> */}
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-yellow-300 rounded-xl py-2 px-2 mt-5"
      >
        Generar Pokemón Aleatorio
      </button>
    </div>
  );
};

export default Pokeapp;
