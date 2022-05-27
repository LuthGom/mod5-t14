import React, { useState } from "react";
import Button from "../../components/Button/Button";
import EnderecosCard from "../../components/EnderecosCard/EnderecosCard";
import { viaCepApi } from "../../services/Api";
// aqui estamos importando/instanciando uma variável styles para o arquivo de css module para conseguirmos extrair as estilizações.
import styles from "./BuscaCep.module.css";
export default function BuscaCep() {
  // criando um state para manipular o valor do input e passar como parametro para a api.
  const [value, setValue] = useState("");
  // criando um state que rebece o json de retorno da requisição à API.
  const [endereco, setEndereco] = useState([]);
  //   console.log("list", lista);
  // criamos um outro state para armazenar todos os endereços pesquisados e rendezirar num histórico mockado.
  const [lista, setLista] = useState([]);
  //   console.log(value);
  //   console.log(endereco);
  // function onde criamos a lógica da requisição: fazemos um fetch e passamos um parametro dinamico.
  function buscaPorCep(cep) {
    fetch(viaCepApi(cep))
      .then((res) => res.json())
      .then((data) => {
        // estamos passamos o retorno da api para o state endereco. Veja bem: Estamos colocando o retorno data entre colchetes para ja ser passado como um array ao state e podermos manipular com os métodos de array.
        setEndereco([data]);
        // aqui, estamos espalhando todos os valores recebidos pelo state lista e dizendo que ele está apto a receber quantos valores vierem do retorno data.
        setLista([...lista, data]);
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
      <Button
        click={() => {
          buscaPorCep(value);
          setValue("");
        }}
        text="Buscar Endereço"
      />
      {/* aqui criamos uma div que engloba: um h2 de um subtitulo e uma expressão javaScript com manipulação do state endereco (que é um array), utilizando o map().
      Aqui, há um pequena lógica de que de não houver nenhum item dentro do array endereco, então a div terá display none. E  partir do momento que houver um indice lá dentro, o display muda para flex  */}
      <div
        style={{
          display: endereco.length < 1 ? "none" : "flex",
          flexDirection: "column",
        }}
        // como declaramos classes vindas de css module: className={variavel styles.nomeDaClasse do arquivo .module.css}
        className={styles.pesquisaContainer}
      >
        <h2>Resultado da pesquisa:</h2>
        {endereco.map((endereco, index) => {
          {
            /* aqui estamos dando o retorno do map com nosso componente de "molde" EnderecosCard, que criamos justamente para receber o retorno da API viaCep. Veja que passamos um segundo parametro para o map que é o index. O map por padrão captura tbm o indice de cada item do array e podemos passar esse index para a propridade key da div para que seja única. (mesmo que o retorno seja apenas 1, mas praticar é sempre bom) */
          }
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
        <div
          style={{ display: lista.length < 1 ? "none" : "flex" }}
          className={styles.historicoContainer}
        >
          {/* aqui estamos mapeando todos os itens armazenados no state lista, de forma mockada, e renderizando na tela. */}
          <h3>Histórico de pesquisa:</h3>
          {lista.map((endereco, index) => {
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
    </div>
  );
}
