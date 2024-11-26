function validarFormulario(){
	//Limpiar error previo
	document.getElementById('errorNombre').textContent = "";
	document.getElementById('errorEmail').textContent = "";
	document.getElementById('errorMensaje').textContent = "";

	//Obtener los valores de los campos
	var nombre = document.getElementById('nombre').value;
	var email = document.getElementById('email').value;
	var mensaje = document.getElementById('mensaje').value;
	var isValid = true;

	// Validar nombre
	if (nombre === "") {
		document.getElementById('errorNombre').textContent = "El nombre es obligatorio";
		isValid = false;
	}

	//Validar correo electrónico
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email === "" || !emailRegex.test(email)) {
		document.getElementById('errorEmail').textContent = "Por favor ingrese un correo válido";
		isValid = false;
	}

	//Validar mensaje
	if (mensaje === ""){
		document.getElementById('errorMensaje').textContent = "El mensaje NO puede estar vacío";
		isValid = false;
	}

	return isValid; //Si todo es válido, envía el formulario
}