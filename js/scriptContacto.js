// Crear vínculo al mail
var elementoA = document.createElement('a');
var referencia = document.createTextNode("lavianda@yahoo.com.ar");
elementoA.appendChild(referencia);
elementoA.href = "mailto:lavianda@yahoo.com.ar";
// Crear span
var elementoSpan = document.createElement('span');
elementoSpan.setAttribute('class','icon-bubbles2');
//elementoSpan.appendChild(elementoA);

var parrafo = document.createElement("p");// Crear nodo de tipo Element
var txt = document.createTextNode(" Mail: ");
parrafo.appendChild(elementoSpan);// Añadir el elementoSpan como hijo del nodo Element
parrafo.appendChild(txt);// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(elementoA);// Añadir elementoA como hijo del nodo Element
parrafo.setAttribute('class','parrafoContacto');
document.getElementById('contacto').appendChild(parrafo);// Añadir el nodo Element como hijo de la pagina

/* Simular intelineado en todas la lineas menos en la ultima (contacto.html) */
var elementoContacto = document.getElementsByClassName('parrafoContacto');

for(var i = 0; i < elementoContacto.length-1; i++) {
	elementoContacto[i].style.margin = '0px';
	elementoContacto[i].style.paddingBottom = '15px';
}

elementoContacto[elementoContacto.length-1].style.paddingBottom  = '0px';
elementoContacto[elementoContacto.length-1].style.margin  = '0px';

