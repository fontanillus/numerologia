// --- Mapas numerológicos ---
const mapaNumerologico = {
  A: 1, J: 1, S: 1,
  B: 2, T: 2,
  C: 3, Ç: 3, L: 3, U: 3,
  D: 4, M: 4,
  E: 5, N: 5, Ñ: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
  K: 11,
  V: 22
};

const mapaNumerologicoAlma = {
  A: 1, U: 3, E: 5, O: 6, I: 9
};

const mapaNumerologicoNombre = { ...mapaNumerologico };

// --- Variables globales para guardar últimos cálculos ---
let ultimoNumeroAnio = null, ultimoSignificadoAnio = null;
let ultimoNumeroPersonal = null, ultimoSignificadoPersonal = null;
let ultimoNumeroDestino = null, ultimoSignificadoDestino = null;
let ultimoNumeroNombre = null, ultimoSignificadoNombre = null;
let ultimoNumeroAlma = null, ultimoSignificadoAlma = null;
let ultimoNumeroExpresionAlma = null, ultimoSignificadoExpresionAlma = null;
let ultimoNumeroProyectoSentido = null, ultimoSignificadoProyectoSentido = null;
let ultimoNumeroAnioPersonal = null, ultimoSignificadoAnioPersonal = null;
let ultimoNumeroMesPersonal = null, ultimoSignificadoMesPersonal = null;

// --- Funciones auxiliares comunes ---
function esFechaValida(año, mes, dia) {
  const fecha = new Date(año, mes - 1, dia);
  return (
    fecha.getFullYear() === año &&
    fecha.getMonth() === mes - 1 &&
    fecha.getDate() === dia
  );
}

function reducirNumero(num) {
  const maestros = [11, 22, 33];
  while (num > 9 && !maestros.includes(num)) {
    num = num
      .toString()
      .split('')
      .reduce((acc, val) => acc + Number(val), 0);
  }
  return num;
}

function mostrarResultado(id, numero, significado) {
  const div = document.getElementById(id);
  if (!div) return;

  if (!numero && !significado) {
    div.textContent = '';
    return;
  }

  div.innerHTML = `
    <div style="font-size: 20px; color: darkviolet; margin-bottom: 0.2em;">Tu numero es: ${numero}</div>
    <div style="font-size: 14px; color: darkmagenta;">${significado}</div>
  `;
  div.style.color = 'black';
}

function mostrarError(id, mensaje) {
  const div = document.getElementById(id);
  if (!div) return;
  div.textContent = mensaje;
  div.style.color = 'red';
}

function mostrarEnConsola(tipo, numero, significado) {
  console.log(`[${tipo}] Número: ${numero}, Significado: ${significado}`);
}

// --- Funciones de cálculo numerológico ---
window.addEventListener('DOMContentLoaded', () => {
  const hoy = new Date();
  const anioActual = hoy.getFullYear();
  const campoAnio = document.getElementById('anio');
  if (campoAnio) {
    campoAnio.value = anioActual;
  }
});

function calcularNumeroAnio() {
  const input = document.getElementById('anio').value;
  const anio = parseInt(input);

  if (isNaN(anio) || anio < 1900 || anio > 2100) {
    mostrarError('resultadoAnio', 'Año inválido');
    return;
  }

  let suma = anio.toString().split('').reduce((acc, val) => acc + Number(val), 0);
  suma = reducirNumero(suma);

  const significado = significadosNumeroAnios?.[suma] || 'Significado no encontrado.';

  ultimoNumeroAnio = suma;
  ultimoSignificadoAnio = significado;

  mostrarResultado('resultadoAnio', suma, significado);
  mostrarEnConsola('Número Año', suma, significado);
}

function mostrarExplicacionAnio() {
  if (ultimoSignificadoAnio) {
    mostrarResultado('explicacionAnio', ultimoNumeroAnio, ultimoSignificadoAnio);
  } else {
    mostrarError('explicacionAnio', 'No hay explicación disponible.');
  }
}

function calcularNumeroPersonal(fecha) {
  if (!fecha) return null;

  const partes = fecha.split('-');
  if (partes.length !== 3) return null;

  const [anio, mes, dia] = partes.map(Number);
  if (isNaN(anio) || isNaN(mes) || isNaN(dia)) return null;
  if (!esFechaValida(anio, mes, dia)) return null;

  const suma = [...anio.toString(), ...mes.toString().padStart(2, '0'), ...dia.toString().padStart(2, '0')]
    .reduce((acc, val) => acc + Number(val), 0);

  const numeroReducido = reducirNumero(suma);
  const significado = significadosNumeroPersonales?.[numeroReducido] || 'Significado no encontrado.';

  return { numero: numeroReducido, significado };
}

function procesarNumeroPersonal() {
  const fecha = document.getElementById('fechaNac').value;
  const resultado = calcularNumeroPersonal(fecha);

  if (resultado) {
    ultimoNumeroPersonal = resultado.numero;
    ultimoSignificadoPersonal = resultado.significado;

    mostrarResultado('resultado', resultado.numero, resultado.significado);
    mostrarEnConsola('Número Personal', resultado.numero, resultado.significado);
  } else {
    mostrarError('resultado', 'Fecha inválida. Por favor, ingresa una fecha válida.');
  }
}

function calcularNumeroDestino() {
  const fecha = document.getElementById('fechaNac').value;
  if (!fecha) {
    mostrarError('resultadoDestino', 'Por favor introduce una fecha válida.');
    return;
  }

  const partes = fecha.split('-');
  if (partes.length !== 3) {
    mostrarError('resultadoDestino', 'Fecha inválida.');
    return;
  }

  const [anio, mes, dia] = partes.map(Number);
  if (isNaN(anio) || isNaN(mes) || isNaN(dia)) {
    mostrarError('resultadoDestino', 'Fecha inválida.');
    return;
  }

  if (!esFechaValida(anio, mes, dia)) {
    mostrarError('resultadoDestino', 'Fecha inválida.');
    return;
  }

  let suma = [...anio.toString(), ...mes.toString().padStart(2, '0'), ...dia.toString().padStart(2, '0')]
    .reduce((acc, val) => acc + Number(val), 0);
  suma = reducirNumero(suma);

  const significado = significadosNumeroDestino?.[suma] || 'Significado no encontrado.';

  ultimoNumeroDestino = suma;
  ultimoSignificadoDestino = significado;

  mostrarResultado('resultadoDestino', suma, significado);
  mostrarEnConsola('Número Destino', suma, significado);
}

//calcular nombre
function calcularNumeroNombre() {
  const input = document.getElementById('nombreCompleto').value.toUpperCase().replace(/[^A-ZÑÇ]/g, '');
  if (!input) {
    mostrarError('resultado', 'Por favor introduce un nombre válido.');
    return;
  }

  let suma = 0;
  for (const letra of input) {
    if (mapaNumerologico[letra]) suma += mapaNumerologico[letra];
  }

  const numeroNombre = reducirNumero(suma);
  const significado = significadosNumeroNombre?.[numeroNombre] || 'Significado no encontrado.';

  ultimoNumeroNombre = numeroNombre;
  ultimoSignificadoNombre = significado;

  mostrarResultado('resultado', numeroNombre, significado);
  mostrarEnConsola('Número Nombre', numeroNombre, significado);
}

//numero del alma
function calcularNumeroAlma() {
  const input = document.getElementById('nombreCompleto').value.toUpperCase().replace(/[^A-ZÑÇ]/g, '');
  if (!input) {
    mostrarError('resultadoAlma', 'Por favor introduce un nombre válido.');
    return;
  }

  let suma = 0;
  for (const letra of input) {
    if (mapaNumerologicoAlma[letra]) suma += mapaNumerologicoAlma[letra];
  }


  const numeroAlma = reducirNumero(suma);
  const significado = significadosNumeroAlma?.[numeroAlma] || 'Significado no encontrado.';

  ultimoNumeroAlma = numeroAlma;
  ultimoSignificadoAlma = significado;

  mostrarResultado('resultadoAlma', numeroAlma, significado);
  mostrarEnConsola('Número Alma', numeroAlma, significado);
}
//expresion alma - sumar consonantes
function calcularNumeroExpresionAlma() {
  const input = document.getElementById('nombreCompleto').value.toUpperCase().replace(/[^A-ZÑÇ]/g, '');
  if (!input) {
    mostrarError('resultadoExpresionAlma', 'Por favor introduce un nombre válido.');
    return;
  }

  let suma = 0;
  for (const letra of input) {
    if (mapaNumerologicoNombre[letra]) suma += mapaNumerologicoNombre[letra];
  }

  const numeroExpresionAlma = reducirNumero(suma);
  const significado = significadosNumeroExpresionAlma?.[numeroExpresionAlma] || 'Significado no encontrado.';

  ultimoNumeroExpresionAlma = numeroExpresionAlma;
  ultimoSignificadoExpresionAlma = significado;

  const div = document.getElementById('resultadoExpresionAlma');
  if (div) {
    div.innerHTML = `
      <span style="color: darkviolet; font-size: 20px;">
      Tu número es: ${numeroExpresionAlma}
      </span><br>
      <em style="color: darkmagenta; font-size: 14px;">
        Significado: ${significado}
      </em>
    `;
    div.style.color = 'black';
  }

  mostrarEnConsola('Número Expresión Alma', numeroExpresionAlma, significado);
}

//proyecto sentido
function calcularProyectoSentido() {
  const nombreCompleto = document.getElementById('nombreCompleto').value;
  const resultadoDiv = document.getElementById('resultadoProyectoSentido');

  if (!nombreCompleto) {
    resultadoDiv.textContent = "Por favor, introduce un nombre válido.";
    console.log("Nombre no introducido.");
    return;
  }

  const nombre = nombreCompleto.toUpperCase().replace(/[^A-ZÑÇ]/g, '');

  const vocales = Object.keys(mapaNumerologicoAlma);
  const valoresVocales = mapaNumerologicoAlma;

  let suma = 0;
  for (const letra of nombre) {
    if (vocales.includes(letra)) {
      suma += valoresVocales[letra];
    }
  }

  const numeroReducido = reducirNumero(suma);
  const significado = significadosProyectoSentido?.[numeroReducido] || 'Significado no encontrado.';
  const mensaje = `
    <span style="color: darkviolet; font-size: 20px;">Tu número es: ${numeroReducido}</span><br>
    <span style="color: darkmagenta; font-size: 14px;">Significado: ${significado}</span>
  `;

  resultadoDiv.innerHTML = mensaje;
  mostrarEnConsola('Número Proyecto Sentido', numeroReducido, significado);
}


//año personal
function calcularNumeroAnioPersonal() {
  const fechaNacimiento = document.getElementById('fechaNac').value;
  if (!fechaNacimiento) {
    mostrarError('resultadoAnioPersonal', 'Por favor, introduce una fecha válida.');
    return;
  }

  const [anioNac, mesNac, diaNac] = fechaNacimiento.split('-').map(Number);
  if (!esFechaValida(anioNac, mesNac, diaNac)) {
    mostrarError('resultadoAnioPersonal', 'Fecha de nacimiento inválida.');
    return;
  }

  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();

  let suma = diaNac + mesNac + anioActual;
  let numeroReducido = reducirNumero(suma);

  const significado = significadosAnioPersonal?.[numeroReducido] || 'Significado no encontrado.';

  ultimoNumeroAnioPersonal = numeroReducido;
  ultimoSignificadoAnioPersonal = significado;

  mostrarResultado('resultadoAnioPersonal', numeroReducido, significado);
  mostrarEnConsola('Número Año Personal', numeroReducido, significado);
}

//mes personal
function calcularMesPersonal() {
  const fechaNacimiento = document.getElementById('fechaNac').value;
  if (!fechaNacimiento) {
    mostrarError('resultadoMesPersonal', 'Por favor, introduce una fecha válida.');
    return;
  }

  const [anioNac, mesNac, diaNac] = fechaNacimiento.split('-').map(Number);
  if (!esFechaValida(anioNac, mesNac, diaNac)) {
    mostrarError('resultadoMesPersonal', 'Fecha de nacimiento inválida.');
    return;
  }

  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth() + 1;

  let suma = diaNac + mesActual + anioActual;
  let numeroReducido = reducirNumero(suma);

  const significado = significadosMesPersonal?.[numeroReducido] || 'Significado no encontrado.';

  ultimoNumeroMesPersonal = numeroReducido;
  ultimoSignificadoMesPersonal = significado;

  mostrarResultado('resultadoMesPersonal', numeroReducido, significado);
  mostrarEnConsola('Número Mes Personal', numeroReducido, significado);
}

