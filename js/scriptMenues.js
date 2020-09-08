alert('Proximamente Nuevos Servicios :)');

/************** FUNCIONES servicios.html *********************/
posiblesPaquetes = document.getElementsByClassName('grupoPack');
// OCULTAR TODO AL ABRIR LA PÁGINA
function ocultarTodo() {
	for(var j = 0; j < posiblesPaquetes.length; j++) {
			posiblesPaquetes[j].style.display = 'none';
	}
}

window.onload = ocultarTodo();

packs = ['INFANTIL','ADULTO','FAMILIAR','PARTY', 'ESPECIAL'];
// var individuales = ['INFANTIL','ADULTO', 'ESPECIAL'];
// var grupales  = ['FAMILIAR','PARTY'];

cajaNombrePackCenter = document.getElementsByClassName('servicio_centro'); //vector paralelo a packs
cajaNombrePackDer = document.getElementsByClassName('servicio_der'); //vector paralelo a packs

function cargarImagenes() {
	for(var i = 0; i < posiblesPaquetes.length; i++) {
		switch(i) {
			case 0:
				cajaNombrePackCenter[i].style.backgroundImage = 'url("img/comidas/INFANTIL_1.jpg")';
				cajaNombrePackDer [i].style.backgroundImage = 'url("img/comidas/INFANTIL_2.jpg")';
				break;
			case 1:
				cajaNombrePackCenter[i].style.backgroundImage = 'url("img/comidas/ADULTO_1.jpg")';
				cajaNombrePackDer [i].style.backgroundImage = 'url("img/comidas/ADULTO_2.jpg")';
				break;
			case 2:
				cajaNombrePackCenter[i].style.backgroundImage = 'url("img/comidas/FAMILIAR_1.jpg")';
				cajaNombrePackDer[i].style.backgroundImage = 'url("img/comidas/FAMILIAR_2.jpg")';
				break;
			case 3:
				cajaNombrePackCenter[i].style.backgroundImage = 'url("img/comidas/PARTY_1.jpg")';
				cajaNombrePackDer[i].style.backgroundImage = 'url("img/comidas/PARTY_2.jpg")';
				break;
			case 4:
				cajaNombrePackCenter[i].style.backgroundImage = 'url("img/comidas/ESPECIAL_1.jpg")';
				cajaNombrePackDer[i].style.backgroundImage = 'url("img/comidas/ESPECIAL_2.jpg")';
				break;
		}
		cajaNombrePackCenter[i].style.backgroundPosition = 'center center';
		cajaNombrePackCenter[i].style.backgroundSize = 'cover';
		cajaNombrePackCenter[i].style.borderRadius = 'inherit';

		cajaNombrePackDer[i].style.backgroundPosition = 'center center';
		cajaNombrePackDer[i].style.backgroundSize = 'cover';
		cajaNombrePackDer[i].style.borderRadius = 'inherit';

	}
}

function ocultar(nombre) {
	var elemento = document.getElementsByClassName(nombre);
	for(var j = 0; j < elemento.length; j++) {
			elemento[j].style.display = 'none';
	}
}

function mostrarPropuestas(lista) { 

	var elemento = document.getElementsByClassName(lista);

	//mostrar lo que corresponde
	if(lista == 'individual') {
		ocultar('grupales');
	} else {
		ocultar('individual');
	}

	var j = 0;
	if(j < elemento.length) {
		if(elemento[j].style.display == 'none') {

			for(var i = 0; i < elemento.length; i++) {
				elemento[i].style.display = 'block';
			}
			
		} else {
			for(var i = 0; i < elemento.length; i++) {
				elemento[i].style.display = 'none'; //ocultar
			}
		}
	}
}

window.onload = cargarImagenes;