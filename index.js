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
  contador++;
  console.log(contador);
  const listado = document.getElementById('formulario');
  const h6 = document.createElement('h6');
  h6.textContent = ('su numero de orden es: ' + contador);
  listado.appendChild(h6);
  h6.classList.add('fs-6','p-3');
})


/* while (true) {
  let destino = prompt(
    'Seleccione el destino: "Chile, Peru o Venezuela"'
  ).toLowerCase();

  let montoOrigen = parseFloat(
    prompt("Ingrese el monto que desea enviar en ARS")
  );

  let total;

  if (destino == "chile") {
    total = tasa.sumaTasa(montoOrigen, tasa.chile);
  }
  if (destino == "peru") {
    total = tasa.sumaTasa(montoOrigen, tasa.peru);
  }

  if (destino == "venezuela") {
    total = tasa.sumaTasa(montoOrigen, tasa.venezuela);

  }
 
  alert("El beneficiario recibirá " + total);

  contador++;

  let orden = {
    NumeroDeOrden: contador,
    monto : montoOrigen,
    moneda : destino,
    montoFinal : total,
  }

  ordenes.push(orden);


  if (window.confirm("Desea finalizar?")) {
    break;
  }
} */
/* console.log (ordenes)

const total = ordenes.reduce((acc, orden) => acc + orden.monto, 0);

alert("El total de todas las operaciones es " + total);

const infoText = ordenes.reduce((str, orden) => str + "Nro. de Orden: " + orden.NumeroDeOrden + ", Monto: " + orden.monto + "\n", "");

let numeroDeOrden = parseInt(prompt("Ingrese su numero de Orden para ver el detalle. \n" + infoText));

let infoOrden = ordenes.find((orden) => orden.NumeroDeOrden == numeroDeOrden);

alert("Numero de Orden: " + infoOrden.NumeroDeOrden + "\n" + "Monto de Origen: " + infoOrden.monto + "\n" + "Moneda de Destino: " + infoOrden.moneda + "\n" + "Pais de Destino: " + infoOrden.montoFinal); */
