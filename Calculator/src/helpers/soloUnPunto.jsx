import React from 'react'

const soloUnPunto = (expresion) => {
   
    const regexPunto = /\./g;

    const resultado = expresion.join("").match(regexPunto);
    console.log("Estoy en solounpunto0", resultado)
    if(resultado ){
        console.log("solo un punto");
        return true
    }

  return false
}

export default soloUnPunto