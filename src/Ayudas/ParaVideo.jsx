import { useState, useEffect } from "react";
import { Comparador, Comparador2, ComparadorBgColor } from "./Comparador";
import Spinner from "./Spinner";
import axios from "axios";

const Pokeapp = () => {
  const [number, setNumber] = useState(6);
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
    habilities: pokemon.abilities,
  };
  // console.log(  objPokemon.types.length )

  // let tipo2 =  pokemon.types === undefined ? '' : types[1].type.name
  const { name, weight, height, types, id, habilities } = objPokemon;
//   let tipo1 = types === undefined ? "" : types[0].type.name;
  console.log(habilities)

  // console.log(tipo1)
  return cargando ? (
    <Spinner />
  ) : (
    <>
      <>
        <div
          
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

          <div className="  py-4">
            <div className="font-bold text-xl mb-2  uppercase">{name}</div>
            <div className=" xl:flex">
              <p className=" r">Weight: {weight}</p>
              <p className=" r">height: {height}</p>
              <p className=" r">My id es: {id}</p>
            </div>
            <div className="flex">
  {/* let habi =   habilities === undefined ? "" : habilities.map(habilidad => {return(habilidad.ability.name)}) */}

             {
              habilities === undefined ? "": habilities.map((habilidad, index) => {
                return(
                  <p key={index} className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 ">{habilidad.ability.name}</p>
                )
              } )
             }
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
