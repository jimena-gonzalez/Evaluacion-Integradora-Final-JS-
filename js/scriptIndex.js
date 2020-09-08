// PRESENTACION DE IMAGENES AUTOMATICAMENTE
var imagenes = document.getElementById('img_descuento');

//ocultar inicialmente
imagenes.display = 'none'; 

var slides = [];
for (var i = 0 ; i < 6; i++) {
	slides[i] = ['img/slides/slides'+ i +'.jpg'];
}

imagenes.src = slides[0];

var indice = 0;

function pasarImagen() {
	if(++indice >= slides.length) {
		indice = 0;
	}
	imagenes.src = slides[indice];
}

setInterval(pasarImagen, 2000);

function ingresoDatos() {
	user = prompt('Ingrese su nombre: ');
	mostrarDatos();
}

function mostrarDatos() {

	imagenes.display = 'block';

	var cajaUser = document.getElementById('username') // Identifico elemento

	if(!user) {
		user = '\'stranger\'';
	}
	user = user.toUpperCase();
	cajaUser.innerHTML = '<h4>Bienvenid@ ' + user + ' </h4>';

	cajaUser = document.getElementById('msg') // Identifico elemento
	cajaUser.innerHTML = '<p>Hoy tenemos una promo para vos...</p>';

	cajaUser = document.getElementById('promoDelDia') // Identifico elemento
	cajaUser.innerHTML = '<h3>Con tu compra de 2 docenas de EMPANADAS te llevas 1 docena más GRATIS.</h3>';

}

window.onload = ingresoDatos;