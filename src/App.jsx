import { useContext } from "react";
import "./App.css";
import Form from "./pages/Form/Form";
// estamos importando os componentes necessários para criar rotas com a lib reac-router-dom.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// aqui, importamos o UserContext, pois é ele quem carrega os dados passados no contexto gerado no UserProvider (lembra lá da propriedade value no UserProvider?!)
import { UserContext } from "./context/UserProvider";
import Pokedex from "./pages/Pokedex/Pokedex";
import BuscaPokemon from "./pages/BuscaPokemon/BuscaPokemon";
import BuscaCep from "./pages/BuscaCep/BuscaCep";
function App() {
  // aqui, estamos desestruturando o dado que queremos do contexto. A sintaxe significa: o dado que queremos sendo instanciado/desestruturado (nesse caso o state auth) = ao hook useContext que recebe no ()  contexto que queremos utilizar.
  const { auth } = useContext(UserContext);
  console.log(auth);
  return (
    <div className="App">
      {/* O componente pai que engloba os dois outros componentes. */}
      {/* estamos utilizando o dado atual do state auth que está instanciado no nosso contexto */}
      <h1>Olá, {auth}</h1>
      <BrowserRouter>
        {/* um componente do router que já vem, feito a partir de uma tag <a> com atributo href para direcionar para outro componente no click, desde que a rota seja passada. */}
        <Link to="/form">Form</Link> <Link to="/pokedex">Pokedex</Link>{" "}
        <Link to="/buscaPokemon">Busca Pokemon</Link>{" "}
        <Link to="/buscaCep">Busca Cep</Link>
        {/* componente que engloba todos as rotas devidamente declaradas. */}
        <Routes>
          {/*  componente usado para declarar rotas seguindo a sintaxe. */}
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/form" element={<Form />} />
          <Route path="/buscaPokemon" element={<BuscaPokemon />} />
          <Route path="/buscaCep" element={<BuscaCep />} />
          {/* <Route path="/teste" element={<Button />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
