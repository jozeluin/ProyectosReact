import React from 'react'

const signosSiNo = (valor) => {
    const regexSigno = /^[+\-x/]$/;
    return valor.match(regexSigno) ? ` ${valor} ` : false;

 
}

export default signosSiNo