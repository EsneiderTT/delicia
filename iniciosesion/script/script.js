const boton = document.querySelector(".iniciar");

boton.addEventListener("click", function () {

    const correo = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    // Comprobar espacios vacíos
    if (correo === "" || password === "") {

        alert("⚠️ Completa todos los campos.");

        return;
    }


    // Comprobar que sea un correo válido
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {

        alert("📧 Ingresa un correo electrónico válido. Ejemplo: correo@gmail.com");

        return;
    }


    // Buscar usuario registrado
    const usuario = JSON.parse(localStorage.getItem("usuario"));


    // Comprobar si existe una cuenta
    if (usuario === null) {

        alert("⚠️ No existe una cuenta. Regístrate primero.");

        return;
    }


    // Comprobar correo y contraseña
    if (
        correo === usuario.correo &&
        password === usuario.password
    ) {

        alert("✅ ¡Inicio de sesión exitoso!");

        window.location.href = "../paginaterrizaje/index.html";

    } else {

        alert("❌ Correo o contraseña incorrectos.");

    }

});