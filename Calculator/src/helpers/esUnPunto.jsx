import React from 'react'

const esUnPunto = (e) => {
    const regexPunto = /\./g;

  return e.match(regexPunto) ? true : false;
}

export default esUnPunto