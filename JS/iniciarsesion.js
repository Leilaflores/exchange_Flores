let ojo = document.getElementById("show_password");

console.log(this.querySelector);

let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", enviar);

function enviar() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("txtPassword").value;
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let resultado = usuarios.filter(
    (usuario) => usuario.correo == email && usuario.password == password
  );
  if (resultado.length == 0) {
    alert("No existe el usuario");
  } else {
    localStorage.setItem("ingresoUsuario", JSON.stringify(resultado[0]));
    window.location.href = "/index.html";
  }
}

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
});
