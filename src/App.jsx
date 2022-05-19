import "./App.css";
import Form from "./components/Form";
// estamos importando os componentes necessários para criar rotas com a lib reac-router-dom.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      {/* O componente pai que engloba os dois outros componentes. */}
      <BrowserRouter>
        {/* um componente do router que já vem, feito a partir de uma tag <a> com atributo href para direcionar para outro componente no click, desde que a rota seja passada. */}
        <Link to="/form">Form</Link>
        {/* componente que engloba todos as rotas devidamente declaradas. */}
        <Routes>
          {/*  componente usado para declarar rotas seguindo a sintaxe. */}
          <Route path="/form" element={<Form />} />
          {/* <Route path="/teste" element={<Button />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
