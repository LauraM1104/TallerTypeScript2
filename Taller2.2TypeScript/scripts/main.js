import { data } from './data.js';
var datosTbody = document.getElementById('datos');
var prom = document.getElementById('promedio');
var serieName = document.getElementById('serieName');
var serieImage = document.getElementById('serieImage');
var serieDescripcion = document.getElementById('serieDescription');
var serieLink = document.getElementById('serieLink'); // Asegúrate de tener esto en tu HTML
CompletarTablaconDatos(data);
function CompletarTablaconDatos(datos) {
    console.log('Desplegando series');
    var cantidadseries = 0;
    var numtemporadas = 0;
    datos.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td class=\"serie-name\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        datosTbody.appendChild(trElement);
        trElement.querySelector(".serie-name").addEventListener("click", function () {
            MostrarDetallesSerie(serie);
        });
        cantidadseries++;
        numtemporadas += serie.seasons;
    });
    console.log("El promedio de temporadas es");
    prom.innerHTML = (numtemporadas / cantidadseries) + "";
}
function MostrarDetallesSerie(serie) {
    console.log('Desplegando detalles');
    serieName.innerText = serie.name;
    serieImage.src = serie.image;
    serieImage.alt = serie.name;
    serieDescripcion.innerText = serie.description;
    serieLink.innerText = serie.link; // Asegúrate de tener un lugar para mostrar el link, si lo necesitas
}
