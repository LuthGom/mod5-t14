import React from "react";

function Button(props) {
  return(
  <>
    <button type={props.type} style={{backgroundColor: props.color, 
    display: props.text === undefined ? 'none' : ""   }} 
    // uma props de event onClick para que possa ser lida em qualquer lugr que o componente Button.jsx seja instanciado.
    onClick={props.click}
    >{props.text} </button>
    
  </>)
}



export default Button;
