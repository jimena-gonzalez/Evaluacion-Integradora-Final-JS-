/************** FUNCIONES menu.html *********************/
var packElegido = prompt("Seleccione un pack: Infantil - Adulto - Familiar - Party - Especial");

var infantil = ['Hamburguesa con guarnición', 'Pancho con guarnición', 'Milanesa con guarnicion', 'Ensaladas'];
infantil.sort();
var adulto = ['Carnes', 'Paella','Tartas','Ensaladas mixtas'];
adulto.sort();
var familiar = ['Asado con guarniciones', 'Carnes (vaca, cordero, pollo, pescado) con guarniciones', 'Sushi'];
familiar.sort();
var party = ['Pizza', 'Empanadas', 'Picadas', 'Tortas'];
party.sort();
var especial = ['Versiones sin TACC', 'Versiones sin sodio/azucar', 'Menús vegetarianos', 'Menús veganos'];
especial.sort();

var packs = [infantil, adulto, familiar ,party, especial];
var nombrePacks = ['INFANTIL','ADULTO','FAMILIAR','PARTY', 'ESPECIAL'];

var cajaNombrePack = document.getElementById('datos_menu');
var cajaImagen = document.getElementById('imagen_pack_elegido');
var cajaReload = document.getElementById('reload');

//Ocultar cajas al abrir la página
cajaNombrePack.style.display = 'none';
cajaReload.style.display = 'none';

function iniciar() {
	mostrarCajas();
	mostrarPack();
}

function mostrarCajas() {
	cajaNombrePack.style.display = 'block';
	cajaReload.style.display = 'block';
}

function mostrarPack() {
	var existePack = false;

	if(packElegido) {

		packElegido = packElegido.toUpperCase();
		existePack = nombrePacks.includes(packElegido);

	}

	if(existePack) {

		cajaNombrePack.innerHTML = '<h2>PACK ' + packElegido + '</h2>';

		//INFO
		var lista = document.createElement('ul');

		var posPackEnVector = nombrePacks.indexOf(packElegido);

		for(var i = 0; i < packs[posPackEnVector].length; i++) {
			var item = document.createElement('li');
			var txt = document.createTextNode(packs[posPackEnVector][i]);
			item.appendChild(txt);
			lista.appendChild(item);
		}

		cajaNombrePack.appendChild(lista);

		// IMAGENES
		var elementoImagen = document.createElement('img');
		elementoImagen.src = "img/comidas/" + packElegido + ".gif";
		elementoImagen.alt = "Imagenes del pack " + packElegido;
		cajaImagen.appendChild(elementoImagen);

	} else {

		mostrarMenuGeneral();

	}

	formatearLista();
}

function mostrarMenuGeneral() {

	cajaNombrePack.innerHTML = '<h2> LO MEJOR </h2>';

	var elementoImagen = document.createElement('img');
	elementoImagen.src = "img/comidas/mejores.gif";
	elementoImagen.alt = "Imagenes de nuestros mejores menus"
	cajaImagen.appendChild(elementoImagen);	

}

//Formateo la lista (utilizando DOM)
function formatearLista() {

	var listaElementosPack = document.querySelectorAll("#datos_menu ul li");
	for(var i = 0; i < listaElementosPack.length; i++) {
		listaElementosPack[i].style.listStyle = 'square inside';
	}

}

window.onload = iniciar;