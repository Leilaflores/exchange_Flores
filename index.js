class Cotizacion {
  constructor() {
    this.chile = 3.72;
    this.peru = 0.017;
    this.venezuela = 0.0222;

    const options = {
      method: "GET",
      headers: { apikey: "xTliFhWzfpqcPVPe2Se97HNJNyRuWsKw" },
    };

    fetch(
      "https://api.apilayer.com/exchangerates_data/fluctuation?base=ARS&symbols=ARS,CLP,VEF,PEN",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.chile = response.rates.CLP.end_rate;
        this.peru = response.rates.PEN.end_rate;
        this.venezuela = response.rates.VEF.end_rate;
      })
      .catch((err) => console.error(err));
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

  total = tasa.sumaTasa(tasaActual, monto.value);
  beneficiario.innerText = total;

  valor.innerText = tasaActual;
});

let monto = document.getElementById("ars");

let beneficiario = document.getElementById("totales");

monto.addEventListener("change", () => {
  if (tasaActual != undefined) {
    total = tasa.sumaTasa(tasaActual, monto.value);
    beneficiario.innerText = Math.round(total);
  }
});

let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", () => {
  if (total != undefined) {
    swal({
      title: "Excelente!",
      text: "Su orden se creo con exito!",
      icon: "success",
      buttons: {
        confirm: {
          text: "Continuar",
          value: true,
          visible: true,
          className: "confirmar",
          closeModal: true,
        },
      },
    });
    contador++;
    console.log(contador);
    const listado = document.getElementById("form");
    const h6 = document.createElement("h6");
    h6.className = "contador my-3";
    h6.textContent =
      "Orden: #" +
      contador +
      " " +
      monto.value +
      " pesos a " +
      Math.round(total) +
      " " +
      selector.value;
    listado.appendChild(h6);
    h6.classList.add("fs-6", "p-3");
  }
  else{
    swal("Complete los datos");
  }
});
