// Author: Diego García Prieto
// Version: 1.0
// Date: 2024/10/01

// variable ventana emergente
var myWindow;

// Variable para el temporizador
var timer;
// Número de segundos transcurridos
var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Variables botones
  const btnInfo = document.getElementById("btnInfo");
  const btnUrl = document.getElementById("btnUrl");
  const btnClose = document.getElementById("btnClose");
  const url = document.getElementById("inputUrl");
  const btnBack = document.getElementById("btnBack");
  const btnForward = document.getElementById("btnForward");
  const btnStartTimer = document.getElementById("btnStartTimer");
  const btnStopTimer = document.getElementById("btnStopTimer");
  const btnRedirection = document.getElementById("btnRedirection");
  
  // Añadir eventos click a los botones
  btnInfo.addEventListener("click", function () {
    informacionNavegador();
  });

  btnUrl.addEventListener("click", function () {
    const inputValue = url.value || "http://www.educa.jcyl.es";
    abrirVentana(inputValue);
  });

  btnClose.addEventListener("click", function () {
    if (myWindow) {
      myWindow.close();
    }
  });

  btnBack.addEventListener("click", function () {
    window.history.back();
  });

  btnForward.addEventListener("click", function () {
    window.history.forward();
  });

  btnStartTimer.addEventListener("click", function () {
    iniciarTemporizador();
  });

  btnStopTimer.addEventListener("click", function () {
    detenerTemporizador();
  });

  btnRedirection.addEventListener("click", function () {
    redireccionar();
  });

  updateWindowSize(); // Actualizar el tamaño de la ventana al cargar
});

// Función para mostrar información del navegador
function informacionNavegador() {
  const navegador = navigator.userAgent;
  const nombreNavegador = navigator.appName;
  const versionNavegador = navigator.appVersion;
  const sistemaOperativo = navigator.platform;
  const idiomaNavegador = navigator.language;

  alert(`Nombre del navegador: ${nombreNavegador}\nVersion: ${versionNavegador}\nSistema operativo: ${sistemaOperativo}\nIdioma: ${idiomaNavegador}`);
}

// Función para abrir una ventana emergente
function abrirVentana(url) {
  myWindow = window.open(url, "ventanaEmergente", "width=800,height=600");
}

// Función para actualizar el tamaño de la ventana
function updateWindowSize() {
  document.getElementById("width").textContent = window.innerWidth; // Ancho de la ventana
  document.getElementById("height").textContent = window.innerHeight; // Alto de la ventana
}

// Evento de cambio de tamaño de ventana
window.onresize = updateWindowSize;

// Funciones para manejar el temporizador
function iniciarTemporizador() {
  timer = setInterval(function () {
    count++;
    document.getElementById("counter").textContent = count;
  }, 1000);
}

function detenerTemporizador() {
  clearInterval(timer);
}

// Evento de conexión a Internet
window.addEventListener('offline', () => {
  document.getElementById('status').textContent = 'Desconectado';
});

window.addEventListener('online', () => {
  document.getElementById('status').textContent = 'Conectado';
});

// Función para redireccionar
function redireccionar(url) {
  document.getElementById("redirection").textContent = "Te redirigirás a www.educa.jcyl.es en 5 segundos.";
  setTimeout(() => {
    window.location.href = "http://www.educa.jcyl.es";
  }, 5000);
}
