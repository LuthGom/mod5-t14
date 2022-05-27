import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { apiPokedex } from "../../services/Api";
import styles from "./Pokedex.module.css";
export default function Pokedex() {
  const [dados, setDados] = useState([]);

  // array com cores para logica de cores aleatorias passadas com style-inline;

  const cores = [
    "#1981CD",
    "#1981CD",
    "#66CDAA",
    "#00A4CD",
    "#E32636",
    "#FFFF00",
    "#F2B73F",
    "#ADFF2F",
    "#ADFF2F",
    "#9966CC",
    "#0000FF",
    "#483D8B",
    "#F400A1",
    "#D2691E",
    "#008B8B",
    "#2F4F4F",
    "#FF7F50",
    "#6C3082",
    "#A2006D",
    "#FF00FF",
  ];
  const coresAleatorias = cores[Math.floor(Math.random() * cores.length)];

  useEffect(() => {
    try {
      fetch(apiPokedex)
        .then((response) => response.json())
        .then((data) => {
          setDados(data.results);
          console.info(dados);
        });
    } catch (erro) {
      console.log("erro: ", erro);
    }
  }, []);

  return (
    <div className={styles.container}>
      {dados.map((pokemon) => {
        return (
          <PokemonCard
            backgroundColor={coresAleatorias}
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
}
