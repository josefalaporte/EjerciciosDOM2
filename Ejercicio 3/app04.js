// 4. Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de la lista dentro de la etiqueta ol.

const olElement = document.querySelector('ol');
const liElement = olElement.querySelector('li.third');
const contenido = liElement.textContent;
console.log(contenido);