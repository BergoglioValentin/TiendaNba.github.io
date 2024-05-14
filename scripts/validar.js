console.log("Estoy conectado...");

//Datos...
const datosCapturadosFormulario = {
    nombre: "",
    apellido:"",
    email: "",
    telefono:"",
    mensaje: ""
}

//Capturar eventos de los inputs
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input",leer);
apellido.addEventListener("input",leer);
email.addEventListener("input",leer);
telefono.addEventListener("input",leer);
mensaje.addEventListener("input",leer);

function leer(e){
    datosCapturadosFormulario[e.target.id] = e.target.value;
}

//Submit...
const formulario = document.querySelector(".formulario_contacto");

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Reacciono al submit...");

    //Validar el formulario
    const {nombre,apellido,email,telefono,mensaje} = datosCapturadosFormulario;
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefonoRegex = /^\d{10}$/;

    if(nombre === "" || apellido === "" || email === "" || telefono === ""||mensaje === "" ) {
        mostrarError("Todos los campos son obligatorios");
        return;
    }

    if(!correoRegex.test(email)){
        mostrarError("Por favor ingrese un correo electronico valido..");
       return;
    }

    if(!telefonoRegex.test(telefono)){
        mostrarError("Por favor ingrese un telefono valido..");
        return;
    }
    mostrarMensaje(`${nombre} ya recibimos correctamente tu mensaje...la pagina se reiniciara en 5 segundos`);

    formulario.reset();
}); 

function mostrarError(mensaje) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add("error");
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 10000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add("correcto");
    formulario.appendChild(alerta);
    setTimeout(() => {
       window.location.reload();
    }, 5000);
}

