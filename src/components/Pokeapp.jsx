import { useState, useEffect } from "react";
import { Comparador, Comparador2, ComparadorBgColor } from "./Comparador";
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
  // let tipo2 = Object.keys(types).length > 1 && types[1].type.name;
  // console.log(tipo2)
  // Object.keys(types)
  // console.log(types === undefined ? '' : types.length);
  //  console.log(tipo1)
  //   console.log(tipo2)

  // console.log(tipo1)
  return cargando ? (
    <Spinner />
  ) : (
    <>
      <>
        <div
          className={`${
            tipo1 == "grass"
              ? "bg-[#8BBE8A]"
              : tipo1 == "poison"
              ? "bg-[#9F6E97]"
              : tipo1 == "normal"
              ? "bg-[#B5B9C4]"
              : tipo1 == "fire"
              ? "bg-[#FFA756]"
              : tipo1 == "water"
              ? "bg-[#58ABF6]"
              : tipo1 == "electric"
              ? "bg-[#F2CB55]"
              : tipo1 == "ice"
              ? "bg-[#91D8DF]"
              : tipo1 == "fighting"
              ? "bg-[#EB4971]"
              : tipo1 == "psychic"
              ? "bg-[#FF6568]"
              : tipo1 == "ground"
              ? "bg-[#F78551]"
              : tipo1 == "flying"
              ? "bg-[#83A2E3]"
              : tipo1 == "bug"
              ? "bg-[#8BD674]"
              : tipo1 == "rock"
              ? "bg-[#D4C294]"
              : tipo1 == "ghost"
              ? "bg-[#8571BE]"
              : tipo1 == "dragon"
              ? "bg-[#7383B9]"
              : tipo1 == "dark"
              ? "bg-[#6F6E78]"
              : tipo1 == "steel"
              ? "bg-[#4C91B2]"
              : tipo1 == "fairy"
              ? "bg-[#EBA8C3]"
              : ""
          } md:h-screen  w-screen xl:flex  justify-center items-center`}
        >
          <div className="md:flex bg-green-30  ">
            <img
              loading="lazy"
              className="mx-auto   "
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
              alt=""
            />
            <img
              loading="lazy"
              className="w-[25%] h-[10%] "
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`}
              alt=""
            />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 uppercase">{name}</div>
            <div className=" xl:flex">
              <p className=" r">Weight: {weight}</p>
              <p className=" r">height: {height}</p>
              <p className=" r">My id es: {id}</p>
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
          <div className="px-6 pt-4 pb-2  flex justify-center gap-2">
            <img
              src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo1}.svg`}
              alt=""
            />

            {Object.keys(types).length > 1 && (
              <img
                src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${types[1].type.name}.svg`}
                alt=""
              />
            )}
            {/* <img
            src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo2}.svg`}
            alt=""
          /> */}
          </div>
          <div className="mx-auto flex justify-center">
            <button
              onClick={handleClick}
              className="bg-yellow-300 rounded-xl py-2 px-2 mt-5"
            >
              Generar Pokemón Aleatorio
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default Pokeapp;
