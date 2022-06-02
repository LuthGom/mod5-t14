import React, { useState, useEffect } from "react";
import { apodUrl } from "../../services/Api";
import Button from "../../components/Button/Button";
export default function Apod() {
  const [date, setDate] = useState("");
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(apodUrl)
      .then((res) => res.json())
      .then((data) => {
        setDados([data]);
      })
      .catch((err) => console.log("erro: ", err));
  }, []);

  async function apodReq(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDados([data]);
      })
      .catch((err) => console.log("erro: ", err));
    setDate("dd/mm/aaaa");
  }

  return (
    <div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <Button
        click={() => apodReq(apodUrl + `&date=${date}`)}
        text="Viaje no espaço-tempo!"
      />

      {dados.map((res, index) => {
        return (
          <div key={index}>
            <h1>{res.title}</h1>
            {res.media_type === "video" ? (
              <iframe src={res.url} width="300px" height="300px"></iframe>
            ) : (
              <img src={res.url} alt="" width="300px" height="300px" />
            )}
            <p
              style={{
                border: "1px solid black",
                width: "fit-content",
                margin: "3em",
                padding: "2em",
              }}
            >
              {res.explanation}
            </p>
          </div>
        );
      })}
    </div>
  );
}
