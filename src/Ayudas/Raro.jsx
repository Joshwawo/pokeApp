import React from 'react'

const Raro = () => {
    // pokemon.typeS == undefined ? "" : Object.keys(pokemon.types).length > 1 ? pokemon.types[1].type.name : "",

  return (
    <div>
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
    
    </div>
  )
}

export default Raro