import React from "react";
// um componente que foi criado pensando exatamente no retorno da api ViaCep, onde fazemos a requisição no BuscaCep.jsx.
export default function EnderecosCard({
  localidade,
  uf,
  logradouro,
  bairro,
  complemento,
  cep,
  indice,
}) {
  return (
    <div>
      <h3>{indice}</h3>
      <h1>{`Localidade: ${localidade} - ${uf}`}</h1>
      <p>{`Logradouro: ${logradouro} `}</p>
      <p>{`Bairro: ${bairro}`}</p>
      <p>{`Complemento: ${complemento}`}</p>
      <p>{`Cep: ${cep}`}</p>
    </div>
  );
}
