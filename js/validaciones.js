const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input,textarea');

const validacionOk = (campo)=>{
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('ocultar'); 
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle'); //Con esto le quito el icono de cruz
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');//Con esto le quito el icono de la palomita
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos[campo] = true;
};

const validacionError = (campo) => {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('ocultar'); 
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle'); 
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');//para que aparezca el mensaje de error
    campos[campo] = false;
};


const validarCampo = (expresion,input,campo)=> {
    
    if(expresion.test(input.value)){
        validacionOk(campo);

    } else {
        validacionError(campo);
    }

};


const validarImg = ()=>{
    let archivo = document.getElementById('img').value,

    extension = archivo.substring(archivo.lastIndexOf('.'),archivo.length);

    if(document.getElementById('img').getAttribute('accept').split(',').indexOf(extension) < 0) {
        validacionError('img');
    } else {
        validacionOk('img');
    }
};


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
	nombre: false,
	email: false,
    mensaje:false,
};

const validarFormulario = (e)=>{
    switch(e.target.name){
        case 'nombre':
            validarCampo(expresiones.nombre,e.target,'nombre');
        break;

        case 'email':
            validarCampo(expresiones.correo,e.target,'email');
        break;

        case 'mensaje':
            validarMensaje();
        break;

    }
};

const validarMensaje = () => {
    const inputMensaje = document.getElementById('mensaje');
    if(inputMensaje.value.length <20){
        validacionError('mensaje');
    } else {
        validacionOk('mensaje');
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit',(e)=>{

	if(!(campos.nombre && campos.email && campos.mensaje )){
        e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	} 
});