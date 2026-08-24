const boton = document.querySelector(".registro");

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");


// Mostrar / ocultar contraseña
toggle.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        toggle.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";
        toggle.classList.replace("fa-eye-slash", "fa-eye");

    }

});


// Registrarse
boton.addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("email").value.trim();
    const contraseña = password.value.trim();


    // Comprobar espacios vacíos
    if (
        nombre === "" ||
        apellido === "" ||
        correo === "" ||
        contraseña === ""
    ) {

        alert("⚠️ Completa todos los campos.");

        return;
    }


    // Comprobar que sea un correo válido
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {

        alert("📧 Ingresa un correo electrónico válido. Ejemplo: correo@gmail.com");

        return;
    }


    // Guardar usuario
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: contraseña
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));


    alert("✅ ¡Registro exitoso!");

    window.location.href = "../iniciosesion/index.html";

});