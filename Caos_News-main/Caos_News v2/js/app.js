//API
$(document).ready(
    function() {
        $.get("https://api.imgflip.com/get_memes", function(data) {
            $.each(data.data.memes, function(i, item) {
                $("#tabla").append("<tr><td>" + item.id +
                    "</td><td>" + item.name +
                    "</td><td><img src =" + item.url +
                    " ></td></tr>");
            })
        })
    });


//VALIDACION REGISTRO
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // 3 a 15 caracteres y solo numeros.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8,9}$/ // 8 a 9 numeros.
}

const campos = {
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
        document.getElementById("enviar").disabled = false;
        document.getElementById("enviar").style.cursor = "pointer"
        document.getElementById("enviar").style.opacity = "1"


    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
        document.getElementById("enviar").disabled = true;
        document.getElementById("enviar").style.cursor = "not-allowed"
        document.getElementById("enviar").style.opacity = "0.5"
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.nombre && campos.password && campos.correo && campos.telefono) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});



//Log consola
console.log("La pagina ha cargado correctamente!")



// validacion contacto

const contacto = document.getElementById('contacto');
const input = document.querySelectorAll('#contacto input');


const campos_contacto = {
    nombreC: false,
    correoC: false,
    telefonoC: false
}

const validarFormContacto = (x) => {
    switch (x.target.name) {
        case "nombreC":
            validarCampos_contacto(expresiones.nombre, x.target, 'nombreC');
            break;
        case "correoC":
            validarCampos_contacto(expresiones.correo, x.target, 'correoC');
            break;
        case "telefonoC":
            validarCampos_contacto(expresiones.telefono, x.target, 'telefonoC');
            break;
    }
}

const validarCampos_contacto = (expresion, input, campoC) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campoC}`).classList.remove('contacto__grupo-incorrecto');
        document.getElementById(`grupo__${campoC}`).classList.add('contacto__grupo-correcto');
        document.querySelector(`#grupo__${campoC} .contacto__input-error`).classList.remove('contacto__input-error-activo');
        campos_contacto[campoC] = true;
        document.getElementById("enviarC").disabled = false;


    } else {
        document.getElementById(`grupo__${campoC}`).classList.add('contacto__grupo-incorrecto');
        document.getElementById(`grupo__${campoC}`).classList.remove('contacto__grupo-correcto');
        document.querySelector(`#grupo__${campoC} .contacto__input-error`).classList.add('contacto__input-error-activo');
        campos_contacto[campoC] = false;
        document.getElementById("enviarC").disabled = true;
    }
}

input.forEach((input) => {
    input.addEventListener('keyup', validarFormContacto);
    input.addEventListener('blur', validarFormContacto);
});

contacto.addEventListener('submit', (x) => {
    e.preventDefault();

    if (campos_contacto.nombre && campos_contacto.correo && campos_contacto.telefono) {
        formulario.reset();

        document.getElementById('contacto__mensaje-exito').classList.add('contacto__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('contacto__mensaje-exito').classList.remove('contacto__mensaje-exito-activo');

        }, 5000);

        document.querySelectorAll('.contacto__grupo-correcto').forEach((icono) => {
            icono.classList.remove('contacto__grupo-correcto');
        });
    } else {
        document.getElementById('contacto__mensaje').classList.add('contacto__mensaje-activo');
    }
});