import { useState, useEffect } from "react";
import Button from "./Button";
function BuscaPokemon() {
  const [value, setValue] = useState("");
  const [dados, setDados] = useState([]);
  const busca = (e) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
      .then((response) => response.json())
      .then((json) => {
        setDados(json);
        console.log(dados);
      });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <Button
        text="Busca Pokemon"
        click={(e) => {
          e.preventDefault();
          busca(value);
        }}
      />
      <h1>{dados.name}</h1>
      <img src={dados.sprites.front_default} alt="" />
    </div>
  );
}
export default BuscaPokemon;
