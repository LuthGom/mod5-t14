// importamos useEffect do próprio React. O useEffect é um hook que nos ajuda a executar efeitos colaterais de forma mais controlada.
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
export default function Pokedex() {
  // aqui temos um state que inicia como um array vazio para receber os valores de retorno da nossa requisição, logo abaixo.
  const [dados, setDados] = useState([]);
  //   O hook aceita dois argumentos: uma callback obrigatória onde escrevemos a função ou funções a serem executadas. E  segundo argumento é um array de dependências opcional que vigia o seguinte: o argumento passado dele será vigiado pelo useEffect e, caso ele sofra uma alteração, o useEffect re-executará a função dentro dele, ou seja, o efeito que ele controla/executa.
  useEffect(() => {
    // aqui estamos realizando a requisição get a ser executada pelo useEffect quando a página renderiza.
    try {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          //estamos passando os dados de retorno da API para a função de atualização do state dados.
          setDados(data.results);
          console.log(dados);
        });
    } catch (erro) {
      console.log("erro: ", erro);
    }
    //aqui estamos passando um array de dependencias vazios como segundo argumento.
  }, []);
  //   console.log(dados);
  return (
    <div>
      {/* aqui, estamos iterando sobre o state dados, e passando um parametro pokemon, que represente cada indice do array (que é um array de objetos). */}
      {dados.map((pokemon) => {
        // Quando iteramos esse array de objetos utilizando o map, nós copiamos todo esse array e retornamos para cada indice uma lista, onde cada item que atender a condição do retorno (ter os atributos nome e url), vai ser renderizado na nossa tela. Estamos passando um componente PokemonCard, que possui props para receber os valores esperados. Por esse componente estar dentro de um array, e porque pokemon representa cada indice do array(cada objeto), então ele será replicado para cada indice que atende a esse retorno.
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
