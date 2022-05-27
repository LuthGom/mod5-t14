import React from "react";
import styles from "./PokemonCard.module.css";
// criamos um componente que espera o retorno de um nome e um link. Componente criado para satisfazer o retorno da api do Pokedex.

export default function PokemonCard({ name, url, backgroundColor }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <h1>{name}</h1>
      <a href={url}>Saiba mais sobre esse pokemon</a>
    </div>
  );
}
