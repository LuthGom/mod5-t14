// estamos importando o hook useState do próprio React.
import React, {useState} from 'react'
import Button from './Button'
function Form() {
  // aqui estamos instanciando diferentes useState para diferentes usabilidades. Lembrando da sintaxe: primeiro elemento é o valor atual, segundo elemento é a função de atualização. E o elemento dentro do () na declaração é o valor inicial do state. OBS: os states podem possuir qualquer tipo de dados: strings, numbers, arrays, objetos, booleanos.
  const [value, setValue] = useState({turma: "Turma", numero: 14})
  const [valueInput, setValueInput] = useState("Input1")
  console.log(valueInput)
  return (
    <div>
        <h1>{value.turma + value.numero}</h1>
        <label htmlFor="nome">Nome</label>
        // estamos passando um evento de onChange que recebe uma callback e dentro dela a função de atualização de um state para declarar o que queremos e conectar com o input em questão. (Lembra do addEventListener? compara só)
        <input type="text" id='nome' value={valueInput} onChange={(event) => setValueInput(event.target.value)} />
        <label htmlFor="email">E-mail</label>
        <input type="text" id='email'/>
        // estamos fazendo o mesmo acima, a única diferença é controlar a mudança do state pelo tipo de evento declarado.
        <Button text="Enviar" color="red" click={(event) => {setValue(event.target.value = "turma 14")}}/>
    </div>
  )
}

export default Form

