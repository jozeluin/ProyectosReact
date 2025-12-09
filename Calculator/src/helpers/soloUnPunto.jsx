import React from 'react'

const soloUnPunto = (expresion) => {
   
    const regexPunto = /\./g;
    const resultado = expresion.match(regexPunto);
    if(!resultado ){
        console.log("solo un punto");
        return true
    }

  return false
}

export default soloUnPunto