class Cotizacion {
  constructor() {
    this.chile = 3.72;
    this.peru = 0.017;
    this.venezuela = 0.0222;
  }

  sumaTasa(tasa, monto) {
    return tasa * monto;
  }
}

const tasa = new Cotizacion();

let ordenes = [];

let contador = 0;

let tasaActual;

let total;

let selector = document.getElementById("inputGroupSelect01");

selector.addEventListener("change", (e) => {
  console.log(selector.value);

  let valor = document.getElementById("tasa");

  tasaActual = tasa[selector.value];

  total = tasa.sumaTasa(tasaActual,monto.value)
 beneficiario.innerText = total

  valor.innerText = tasaActual;
});

let monto = document.getElementById("ars");

let beneficiario = document.getElementById("totales");

monto.addEventListener("change", ()=>{
total = tasa.sumaTasa(tasaActual,monto.value)
 beneficiario.innerText = total
} );

let confirmar = document.getElementById("confirmar")

confirmar.addEventListener("click", ()=>{
  swal({
    title: "Excelente!",
    text: "Su orden se creo con exito!",
    icon: "success",
    buttons: {confirm: {
      text: "Continuar",
      value: true,
      visible: true,
      className: "confirmar",
      closeModal: true}
    }

  });
  contador++;
  console.log(contador);
  const listado = document.getElementById('formulario');
  const h6 = document.createElement('h6');
  h6.textContent = ('su numero de orden es: ' + contador);
  listado.appendChild(h6);
  h6.classList.add('fs-6','p-3');
}) 