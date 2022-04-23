let ojo = document.getElementById("show_password");

console.log(this.querySelector);

ojo.addEventListener("click", (mostrarPassword) => {
    const icon = document.querySelector("#icono");
    let cambio = document.getElementById("txtPassword");

    if (cambio.type == "password") {
        cambio.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        cambio.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
})