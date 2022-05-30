function enviarMensaje(mensaje){
    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    mensajes.push(mensaje);
    localStorage.setItem("mensajes", JSON.stringify(mensajes));

}

let enviar = document.getElementById("confirmar");

confirmar.addEventListener("click", confirm);

function confirm(){
    let email = document.getElementById("email").value;
    let number = document.getElementById("telefono").value;
    let text = document.getElementById("motivo").value;

    const mensaje ={
        email : email,
        number : number,
        text : text,

    }

    enviarMensaje(mensaje);

    swal("Muy bien!", "Se ha enviado su mensaje!", "success");
} 