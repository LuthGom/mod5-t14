import React, { useState } from "react";
import { climaUrl } from "../../services/Api";
import Button from "../../components/Button/Button";
export default function ClimaTempo() {
  const [cidade, setCidade] = useState();
  const [clima, setClima] = useState([]);
  function climaReq(url) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setClima([data]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setCidade(e.target.value)}
      />
      <Button click={() => climaReq(climaUrl(cidade))} text="Pesquisar Clima" />
      {clima !== undefined ? (
        clima.map((cidade, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid black",
                width: "fit-content",
                marginLeft: "10em",
                marginTop: "2em",
                padding: "1em",
                backgroundColor: "lightblue"
              }}
            >
              <h1>{cidade.name}</h1>
              <h2>
                Tempo: {cidade.weather[0].description}, {cidade.main.temp}{" "}
                KELVIN{" "}
              </h2>
              <h3>Velocidade do vento: {cidade.wind.speed}</h3>
            </div>
          );
        })
      ) : (
        <p>Erro</p>
      )}
    </div>
  );
}
