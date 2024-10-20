import { Serie } from './serie.js';
import { data } from './data.js';

let datosTbody: HTMLElement = document.getElementById('datos')!;
let prom: HTMLElement = document.getElementById('promedio')!;
let serieName: HTMLElement = document.getElementById('serieName')!;
let serieImage: HTMLImageElement = document.getElementById('serieImage') as HTMLImageElement;
let serieDescripcion: HTMLElement = document.getElementById('serieDescription')!;
let serieLink: HTMLElement = document.getElementById('serieLink')!; // Asegúrate de tener esto en tu HTML

CompletarTablaconDatos(data);

function CompletarTablaconDatos(datos: Serie[]): void {
  console.log('Desplegando series');
  let cantidadseries = 0;
  let numtemporadas = 0;
  
  datos.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="serie-name">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    datosTbody.appendChild(trElement);

    trElement.querySelector(".serie-name")!.addEventListener("click", () => {
      MostrarDetallesSerie(serie);
    });

    cantidadseries++;
    numtemporadas += serie.seasons;
  });

  console.log("El promedio de temporadas es");
  prom.innerHTML = (numtemporadas / cantidadseries)+"";
}

function MostrarDetallesSerie(serie: Serie): void {
  console.log('Desplegando detalles');
  serieName.innerText = serie.name;
  serieImage.src = serie.image;
  serieImage.alt = serie.name; 
  serieDescripcion.innerText = serie.description;
  serieLink.innerText = serie.link; // Asegúrate de tener un lugar para mostrar el link, si lo necesitas
}
