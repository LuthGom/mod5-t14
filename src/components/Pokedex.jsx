import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
export default function Pokedex() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          setDados(data.results);
          console.info(dados);
        });
    } catch (erro) {
      console.log("erro: ", erro);
    }
  },[]);

  return (
    <div>
      {dados.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
}
