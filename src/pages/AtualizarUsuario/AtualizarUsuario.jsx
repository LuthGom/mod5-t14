import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
export default function AtualizarUsuario() {
  const [res, setRes] = useState({});
  useEffect(() => {
    fetch("https://api-loja-t11.herokuapp.com/usuarios/26")
      .then((res) => res.json())
      .then((res) => setRes(res.usuario.usuario[0]));
  }, []);
  console.log(res);
  //   exemplo de axios (precisar instalar no projeto pra funcionar e substituir pelo fetch)
  //   axios.patch(url, body)
  //   .then((res) => {
  //       console.log(res)
  //   })
  //   .catch(err => console.log(err))
  function handleOnChange(e) {
    setRes({ ...res, [e.target.name]: e.target.value });
  }
  function atualizarReq(body, url) {
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <form>
      <input
        type="text"
        placeholder="nome"
        value={res.nome}
        onChange={handleOnChange}
        name="nome"
      />
      <input
        type="text"
        placeholder="apelido"
        value={res.apelido}
        name="apelido"
        onChange={handleOnChange}
      />
      <input type="text" placeholder="email" value={res.email} name="email" />

      <input
        type="password"
        placeholder="senha"
        value={res.senha}
        name="senha"
      />

      <Button
        click={(e) => {
          e.preventDefault();
          atualizarReq(
            res,
            "https://api-loja-t11.herokuapp.com/usuario/" + res.email
          );
        }}
        text="Atualizar Dados"
      />
    </form>
  );
}
