import React from 'react'

const signosSiNo = (valor) => {
    const regexSigno = /^[+\-*/]$/;
    //return valor.match(regexSigno) ? ` ${valor} ` : false;
return valor.match(regexSigno) ? true : false;
 
}

export default signosSiNo