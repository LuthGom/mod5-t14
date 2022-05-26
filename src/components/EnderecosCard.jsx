import React from "react";

export default function EnderecosCard({
  localidade,
  uf,
  logradouro,
  bairro,
  complemento,
  cep,
  indice
}) {
  return (
    <div >
      <h3>{indice}</h3>
      <h1>{`Localidade: ${localidade} - ${uf}`}</h1>
      <p>{`Logradouro: ${logradouro} `}</p>
      <p>{`Bairro: ${bairro}`}</p>
      <p>{`Complemento: ${complemento}`}</p>
      <p>{`Cep: ${cep}`}</p>
    </div>
  );
}
