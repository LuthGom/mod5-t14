import React from "react";
// criamos um componente que espera o retorno de um nome e um link. Componente criado para satisfazer o retorno da api do Pokedex.
export default function PokemonCard({ name, url }) {
  return (
    <div>
      <h1>{name}</h1>
      <a href={url}>Saiba mais sobre esse pokemon</a>
    </div>
  );
}
