// elementos que voy a ocupar del html
const formulario = document.querySelector("#formulario");
const montoInput = document.querySelector("#monto");
const monedaSelect = document.querySelector("#moneda");
const resultado = document.querySelector("#resultado");
const mensaje = document.querySelector("#mensaje");
const monedaActual = document.querySelector("#monedaActual");
const graficoVacio = document.querySelector("#graficoVacio");
const boton = formulario.querySelector("button");


let miGrafico;


// formatos para mostrar los numeros de mejor forma
const formatoCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

const formatoMoneda = new Intl.NumberFormat("es-CL", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});


// busca la informacion de la moneda seleccionada
async function buscarMoneda(moneda) {
  const respuesta = await fetch(`https://mindicador.cl/api/${moneda}`);

  if (!respuesta.ok) {
    throw new Error("No se pudo obtener la información de la moneda");
  }

  return await respuesta.json();
}


// recibe la serie y crea el grafico
function dibujarGrafico(serie, nombre) {
  const ultimosDiez = serie.slice(0, 10).reverse();

  const etiquetas = ultimosDiez.map((dato) => {
    return new Date(dato.fecha).toLocaleDateString("es-CL", {
      day: "2-digit",
      month: "2-digit"
    });
  });

  const valores = ultimosDiez.map((dato) => dato.valor);


  // borro el grafico anterior para poder hacer otro
  if (miGrafico) {
    miGrafico.destroy();
  }

  graficoVacio.hidden = true;


  // configuracion del grafico de los diez dias
  miGrafico = new Chart(document.querySelector("#grafico"), {
    type: "line",
    data: {
      labels: etiquetas,
      datasets: [{
        label: `Valor de ${nombre}`,
        data: valores,
        borderColor: "#1d8558",
        backgroundColor: "#1d855826",
        borderWidth: 3,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#1d8558",
        pointRadius: 4,
        tension: 0.28,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: (valor) => `$${formatoMoneda.format(valor)}`
          }
        }
      }
    }
  });
}


// evento principal del formulario
formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mensaje.textContent = "";

  const monto = Number(montoInput.value);
  const moneda = monedaSelect.value;


  // reviso que los dos campos esten completos
  if (monto <= 0 || !moneda) {
    mensaje.textContent = "Ingresa un monto válido y selecciona una moneda.";
    return;
  }


  try {
    boton.disabled = true;
    boton.textContent = "Buscando...";

    const datos = await buscarMoneda(moneda);
    const valorConvertido = monto / datos.serie[0].valor;


    // muestro el resultado y despues actualizo el grafico
    resultado.innerHTML = `${formatoCLP.format(monto)} equivalen a <strong>${formatoMoneda.format(valorConvertido)} ${datos.codigo}</strong>`;
    monedaActual.textContent = datos.nombre;
    dibujarGrafico(datos.serie, datos.nombre);

  } catch (error) {
    // si la api falla el error queda escrito en la pagina
    mensaje.textContent = `Error: ${error.message}. Inténtalo nuevamente.`;
    resultado.textContent = "No fue posible realizar la conversión";

  } finally {
    boton.disabled = false;
    boton.textContent = "Buscar";
  }

});
