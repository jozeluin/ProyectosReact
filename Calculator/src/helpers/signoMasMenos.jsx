import React from 'react'

const signoMasMenos = (valor) => {
const regexSigno = /[+ -]/;
    return valor.match(regexSigno) ? true: false;
}

export default signoMasMenos