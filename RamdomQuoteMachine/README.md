# Ramdom Quote Machine 
Primer proyecto de freebootCamp, en React.

## Librerias necesitamos
En el index.html vamos a colocar en formato html(cdn), los scripts y links que necesitamos. Hemos colocado hay el script de react y react-dom ademas del link de Boostrap. Tambien utilizaremos Babel, Babel es un transpilador de JavaScript que, en el contexto de React, se encarga de convertir código moderno (como JSX y ES6+) en código JavaScript compatible con navegadores antiguos.
Hemos colocado un script en el body referente a babel, lo tenemos que colocar por fuerza , sino no funcionara.
Tambien hemos colocado el link de fontawesome para utilizar las mismas fuentes que el ejemplo.

## ReactDom
Creamos un elemento el cual se renderizara un elemento con el id que indicamos del elemento ubicado en index.html

```javascript
ReactDOM.render(<App />, document.getElementById("app"));

```

## Programacion
El nucleo lo tenemos en index.js. Crearemos dos estados, uno que coloca las cita y otro que la elige de una forma aleatoria.

1. ### UseEffect
    Se cargan las citas de una api. Se utiliza el "setQuotes" para cargar las citas en "quote".
    Despues conseguimos la cita aleatoria con "ranmdomIndex" y "setRandomQuotes".
2. ### Mostrar info
    Mostramos en el return la cita y el autor, y clicando el boton llamamos a "getNewQuote" para generar otra cita aleatoria.
3. ### Iconos Redes Sociales
    Al pulsar el correspondiente icono, llevamos la cita a un red social. Nos hemos fijado en  internet, como hacerlo

4. ### Damos formato con Boostrap
    Mediante Boostrap damos formatos a los "div", y restantes elementos