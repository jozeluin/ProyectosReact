import React from 'react'

const operCompleto = (e) => {
  typeof numin === 'number'
  console.log("Estoy en operCompleto", e)
  console.log(typeof e)
let a = typeof e === 'number' ? e.toString() : e.join("")
  
  

  const regex = /^[-+]?\d+(\.\d+)?\.?$/;//numeros con +- o con decimales
   a=a.match(regex) ? a : a.join("")
  const regexOPerando = /^[+-]?\d+(\.\d*)?$/g;//como 123, -45, 67.8, -9.0, 10.)
  let salida = false

  // salida= a.match(regex) ? false :a.match(regexOPerando) ? true : false;

salida= a.match(regexOPerando) ? true : false;

     
  return salida
}

export default operCompleto