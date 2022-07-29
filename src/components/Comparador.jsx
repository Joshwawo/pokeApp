import React from "react";

const Comparador = ({ children }) => {
  return (
    <div className="inline px-2 ">
      <span
        className={` py-2 px-2 font-semibold uppercase rounded-md ${
          children == "grass"
            ? "bg-green-200"
            : children == "poison"
            ? "bg-purple-200"
            : children == "normal"
            ? "bg-[#A8A878]"
            : children == "fire"
            ? "bg-[#F08030]"
            : children == "water"
            ? "bg-[#6890F0]"
            : children == "electric"
            ? "bg-[#F8D030]"
            : children == "ice"
            ? "bg-blue-200"
            : children == "fighting"
            ? "bg-[#C22E28]"
            : children == "psychic"
            ? "bg-[#F85888]"
            : children == "ground"
            ? "bg-[#E0C068]"
            : children == "flying"
            ? "bg-[#A890F0]"
            : children == "bug"
            ? "bg-[#A8B820]"
            : children == "rock"
            ? "bg-[#B8A038]"
            : children == "ghost"
            ? "bg-[#705898]"
            : children == "dragon"
            ? "bg-[#7038F8]"
            : children == "dark"
            ? "bg-[#705848]"
            : children == "steel"
            ? "bg-[#B8B8D0]"
            : children == "fairy"
            ? "bg-[#EE99AC]"
            : ""

        }`}
      >
        {children}
      </span>
      

      {/* {
            Object.keys(children).length > 1 &&
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {children}
          </span>
          } */}
    </div>
  );
};


const Comparador2 = ({children}) => {
  return (
    <span
              className={` py-2 px-2 rounded-md font-semibold uppercase ${
                children == "grass"
                  ? "bg-green-200"
                  : children == "poison"
                  ? "bg-purple-200"
                  : children == "normal"
                  ? "bg-[#A8A878]"
                  : children == "fire"
                  ? "bg-[#F08030]"
                  : children == "water"
                  ? "bg-[#6890F0]"
                  : children == "electric"
                  ? "bg-[#F8D030]"
                  : children == "ice"
                  ? "bg-blue-200"
                  : children == "fighting"
                  ? "bg-[#C22E28]"
                  : children == "psychic"
                  ? "bg-[#F85888]"
                  : children == "ground"
                  ? "bg-[#E0C068]"
                  : children == "flying"
                  ? "bg-[#A890F0]"
                  : children == "bug"
                  ? "bg-[#A8B820]"
                  : children == "rock"
                  ? "bg-[#B8A038]"
                  : children == "ghost"
                  ? "bg-[#705898]"
                  : children == "dragon"
                  ? "bg-[#7038F8]"
                  : children == "dark"
                  ? "bg-[#705848]"
                  : children == "steel"
                  ? "bg-[#B8B8D0]"
                  : children == "fairy"
                  ? "bg-[#EE99AC]"
                  : ""
              }`}
            >
              {children}
            </span>
  )
}


const ComparadorBgColor = ({children}) => {
  return (
    <div className={`${
      children == "grass"
        ? "bg-green-200"
        : children == "poison"
        ? "bg-purple-200"
        : children == "normal"
        ? "bg-[#A8A878]"
        : children == "fire"
        ? "bg-[#F08030]"
        : children == "water"
        ? "bg-[#6890F0]"
        : children == "electric"
        ? "bg-[#F8D030]"
        : children == "ice"
        ? "bg-blue-200"
        : children == "fighting"
        ? "bg-[#C22E28]"
        : children == "psychic"
        ? "bg-[#F85888]"
        : children == "ground"
        ? "bg-[#E0C068]"
        : children == "flying"
        ? "bg-[#A890F0]"
        : children == "bug"
        ? "bg-[#A8B820]"
        : children == "rock"
        ? "bg-[#B8A038]"
        : children == "ghost"
        ? "bg-[#705898]"
        : children == "dragon"
        ? "bg-[#7038F8]"
        : children == "dark"
        ? "bg-[#705848]"
        : children == "steel"
        ? "bg-[#B8B8D0]"
        : children == "fairy"
        ? "bg-[#EE99AC]"
        : ""
    }`}>
 tacos
    </div>
  )
}






export  {
  Comparador,
  Comparador2,
  ComparadorBgColor
};
