import React, { useState } from "react";
import EnderecosCard from "./EnderecosCard";
export default function BuscaCep() {
  const [value, setValue] = useState("");
  const [endereco, setEndereco] = useState([]);
  const [lista, setLista] = useState([]);
  //   console.log("list", lista);

  //   console.log(value);
  //   console.log(endereco);
  function buscaPorCep(url) {
    const req = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEndereco([data]);
        setLista([...lista, data]);
      })
      .catch((err) => {
        console.log(err);
      });
    if (req) {
      return req;
    } else {
      return <p>Erro</p>;
    }
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          buscaPorCep(`https://viacep.com.br/ws/${value}/json/`);
          setValue("");
        }}
      >
        Buscar Endereço
      </button>
      <div
        style={{ display: endereco.length < 1 ? "none" : "flex" , flexDirection: "column"}}
      >
        <h2>Resultado da pesquisa:</h2>
        {endereco.map((endereco, index) => {
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
