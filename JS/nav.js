const icono = document.getElementById("icono");
const ingreso = document.getElementById("iniciarSesion");
const salida = document.getElementById("cerrarSesion");
const crear = document.getElementById("crearCuenta");

function mostrarInfoLoggeado() {
    ingreso.style.display = "none";
    icono.style.display = "block";
    salida.style.display = "block";
    crear.style.display = "none";
  }

function mostrarInfoNoLoggeado(){
    ingreso.style.display = "block";
    icono.style.display = "none";
    salida.style.display = "none";
    crear.style.display = "block";
}

if (localStorage.getItem("ingresoUsuario")) {
    mostrarInfoLoggeado();
}

else {
    mostrarInfoNoLoggeado();
}

salida.addEventListener("click", () =>{
    mostrarInfoNoLoggeado();
    localStorage.removeItem("ingresoUsuario");
}
)