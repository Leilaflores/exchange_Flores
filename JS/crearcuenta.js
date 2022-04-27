
/* if() */

console.log(localStorage.getItem("usuarios"));

let ojo = document.getElementById("show_password");

console.log(this.querySelector);

ojo.addEventListener("click", showPassword);

let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", enviar);

function enviar() {
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let id = document.getElementById("tipoId").value;
    let numId = document.getElementById("Id").value;
    let clave = document.getElementById("txtPassword").value;
    
    const usuario = {
        nombre: nombre,
        correo: correo,
        tipoId: id,
        id: numId,
        password: clave,
    }
    
    localStorage.setItem("usuario", JSON.stringify(usuario));
    
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    
    console.log(usuarioLocal);
    console.log(usuarioLocal.nombre);
}

function showPassword() {
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
}
