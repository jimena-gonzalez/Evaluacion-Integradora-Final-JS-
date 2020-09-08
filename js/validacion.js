// Identificacion de los elmentos HTML
var nomYape = document.getElementById('nombre-apellido');
var mail = document.getElementById('email');
var tel = document.getElementById('tel');
var botonEnviar = document.getElementById('boton-enviar');
var elemForm = document.formulario;
var comentario = document.getElementById('comentario');

function validarIngreso() {
	//Asociación eventos-etiquetas
	nomYape.addEventListener('input', validarNombre);
	mail.addEventListener('input', validarMail);
	tel.addEventListener('input', validarTelefono, false);
	botonEnviar.addEventListener("click", enviar, false);
	
	validarNombre();
	validarMail();
	validarTelefono();
}

// Validar Campos
function validarNombre() {
	if(nomYape.value == '') {
		nomYape.style.backgroundColor = '#F64F3E';
		nomYape.setCustomValidity('Ingresá al menos tu nombre');
	} else {
		nomYape.style.backgroundColor = '#FFFFFF'; //'#58BF0B'
		nomYape.setCustomValidity('');
	}
}

function validarMail() {
	if(mail.value == '') {
		mail.setCustomValidity('Campo obligatorio');
		mail.style.background='#F64F3E';
	} else {
		if(mail.validity.typeMismatch) {
			mail.setCustomValidity('Complete con una direccion válida');
			mail.style.background='#F64F3E';
		} else {
			mail.setCustomValidity('');
			mail.style.background='#FFFFFF';			
		}
	}
}

function chequearComentario() {
	if(comentario.value == 'Coméntenos lo que desee...') {
		comentario.value = '';
	}
}

function validarTelefono() {
	var esValido = tel.checkValidity();
	if(tel.validity.patternMismatch) {
		tel.setCustomValidity('Complete con celular válido [00011112222]');
		tel.style.background='#F64F3E';
	} else {
		tel.setCustomValidity('');
		tel.style.background='#FFFFFF';
	}

}

function enviar(){
	var esValido = elemForm.checkValidity(); 
	if(esValido){
		chequearComentario();
		elemForm.submit();
	}
}

window.addEventListener('load', validarIngreso);