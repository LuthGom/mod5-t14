import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./context/UserProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* aqui, estamos fazendo o App o nosso componente fiho. Quando fazemos isso, tornamos os dados passado no contexto criado dentro do UserProvider acessível, tanto ao App quanto a todos os componentes descendentes do App. */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
