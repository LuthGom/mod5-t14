// criamos um componente que irá gerar um contexto, utilizando a propriedade createContext do react.

import { createContext, useState } from "react";
//instanciamos essa propriedade na const UserContext que está sendo exportada.
export const UserContext = createContext()
// criamos uma função UserProvider que irá gerar o componente de contexto.
// Ou seja: UserProvider irá gerar o ambiente de contexto e irá englobar os elementos filhos (representados por children e que irão ser englobados no main.jsx ou no App.jsx) e o UserContext será quem será usado em outros componentes para conseguirmos usar esses dados passados e manipulados nesse contexto.
export const UserProvider = ({children}) => {
    //criamos um state que será o dado a ser passado como contexto.
    const [auth, setAuth ] = useState("Teste")
    
    return (
        // aqui, estamos gerando um componente UserContext que recebe uma propriedade Provider (por causa do createContext ali em cima), e quando chamamos o Provider temos a propriedade value, que recebe os valores a serem passados como contexto. Nesse caso está sendo o nosso state auth. Tanto o auth (valor atual do state) quanto o setAuth(nossa função de atualização desse state).
        <UserContext.Provider value={{auth, setAuth}}>
            {/* children aqui representa os elementos fihos que serão passados à frente. */}
            {children}

        </UserContext.Provider>
    )
}