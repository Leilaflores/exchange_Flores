function guardarUsuario(usuario) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

!localStorage.getItem("usuarios") && localStorage.setItem("usuarios", JSON.stringify([]));

let ojo = document.getElementById("show_password");

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
  };

  guardarUsuario(usuario);

  swal({
    title: "Good job!",
    text: "Su usario se ha creado con exito!",
    icon: "success",
    button: "Continuar!",
  });  
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
