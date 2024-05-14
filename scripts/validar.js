const formulario = document.querySelector(".formulario_contacto");

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const mensaje = document.querySelector("#mensaje").value;
})

