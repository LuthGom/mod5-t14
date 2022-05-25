import { useState } from "react";
import Button from "./Button";
function BuscaPokemon() {
  // criamos um state que captura o valor do input
  const [value, setValue] = useState("");
  //   criamos um state que guarda o valor de retorno da requisição.
  const [dados, setDados] = useState([]);
  //   criamos uma função que fica responsável por fazer uma requisição, utilizando o fetch.
  // essa requisição aceita um parâmetro que ao final passamos da url, que receberá o nome o pokemon para fazer uma busca direcionada.
  const busca = (e) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
      .then((response) => response.json())
      .then((json) => {
        //   aqui atribuimos o valor de retorno da requisição ao state dados.
        setDados([json]);
        console.log(dados);
      });
  };

  return (
    <div style={{ margin: "1em" }}>
      {/* passamos o setValue para o onChange para atualizar o valor do state value a cada digito. */}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      {/* passamos o evento de onClick do Button o e.preventDefault() para evitar o recarregamento da página e passamos a função busca que recebe o value (state que captura o valor do input) como argumento. */}{" "}
      <Button
        text="Busca Pokemon"
        click={(e) => {
          e.preventDefault();
          if (value === "" || undefined) {
            return <p>Digite um argumento válido</p>;
          }
          return busca(value);
        }}
      />
      {/* aqui, com o retorno bem-sucedido, estamos pegando valores d retorno da requisição. */}
      {dados.map((pokemon, index) => {
        console.log(pokemon.name);
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              key={index}
              style={{
                border: "1px solid black",
                width: "200px",
                margin: "1em",
              }}
            >
              <h1>{pokemon.name}</h1>
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default BuscaPokemon;
