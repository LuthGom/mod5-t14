import React from "react";
import styles from "./EnderecosCard.module.css";
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
    <div className={styles.container}>
      <h3>{indice}</h3>
      <h1>{`Localidade: ${localidade} - ${uf}`}</h1>
      <p>{`Logradouro: ${logradouro} `}</p>
      <p>{`Bairro: ${bairro}`}</p>
      <p>{`Complemento: ${complemento}`}</p>
      <p>{`Cep: ${cep}`}</p>
    </div>
  );
}
