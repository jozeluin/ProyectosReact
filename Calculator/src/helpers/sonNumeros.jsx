import React from 'react'

const sonNumeros = (e) => {
   const regex = /^\d+$/;
   console.log(e.match(regex) ? true : false);

 return e.match(regex) ? true : false;
 // e.match(regex) ? true : false;
}

export default sonNumeros