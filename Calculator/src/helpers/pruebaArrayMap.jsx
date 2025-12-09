import React from 'react'

const pruebaArrayMap = (miArray) => {
   const cadenaNumeros = miArray.reduce((acumulador, valorActual) => acumulador + valorActual.toString(), '');
   // const cadenaNumeros2 = miArray.join(''); // .join() es perfecto para esto

 return cadenaNumeros;
}

export default pruebaArrayMap