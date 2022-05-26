import React, { useState } from "react";
import EnderecosCard from "./EnderecosCard";
export default function BuscaCep() {
  // criando um state para manipular o valor do input e passar como parametro para a api.
  const [value, setValue] = useState("");
  // criando um state que rebece o json de retorno da requisição à API.
  const [endereco, setEndereco] = useState([]);
  //   console.log("list", lista);

  //   console.log(value);
  //   console.log(endereco);
  // function onde criamos a lógica da requisição: fazemos um fetch e passamos um parametro dinamico.
  function buscaPorCep(cep) {
    const req = fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // estamos passamos o retorno da api para o state endereco. Veja bem: Estamos colocando o retorno data entre colchetes para ja ser passado como um array ao state e podermos manipular com os métodos de array.
        setEndereco([data]);

      })
      .catch((err) => {
        console.log(err);
      });
   
  }
  return (
    <div>
      {/* um input onde digitamos o cep para ser passado de forma dinamica para o parametro da função de requisição à api, utilizando o setValue dentro do evento onChange. */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      {/* O button fica responsável de chamar a requisição por meio do evento onClick. Além disso, o setValue está recebendo "" para limpar o input após a requisição.s*/}
      <button
        onClick={() => {
          
          buscaPorCep(value);
          setValue("");
        }}
      >
        Buscar Endereço
      </button>
      {/* aqui criamos uma div que engloba: um h2 de um subtitulo e uma expressão javaScript com manipulação do state endereco (que é um array), utilizando o map().
      Aqui, há um pequena lógica de que de não houver nenhum item dentro do array endereco, então a div terá display none. E  partir do momento que houver um indice lá dentro, o display muda para flex  */}
      <div
        style={{
          display: endereco.length < 1 ? "none" : "flex",
          flexDirection: "column",
        }}
      >
        <h2>Resultado da pesquisa:</h2>
        {endereco.map((endereco, index) => {
        {/* aqui estamos dando o retorno do map com nosso componente de "molde" EnderecosCard, que criamos justamente para receber o retorno da API viaCep. Veja que passamos um segundo parametro para o map que é o index. O map por padrão captura tbm o indice de cada item do array e podemos passar esse index para a propridade key da div para que seja única. (mesmo que o retorno seja apenas 1, mas praticar é sempre bom) */}
          return (
            <EnderecosCard
              key={index}
              localidade={endereco.localidade}
              uf={endereco.uf}
              logradouro={endereco.logradouro}
              bairro={endereco.bairro}
              complemento={endereco.complemento}
              cep={endereco.cep}
            />
          );
        })}
      </div>
    </div>
  );
}
