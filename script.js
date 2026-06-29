import { consumirExcelDrive } from "./consumirExcelDrive.js";

const ID_EXCEL = "1GaD487ksKiPYrDaQV-RdOv-1xC5iA-rZ4kZrsiXCo5A";

document.addEventListener("DOMContentLoaded", async ()=>{

    const series = await consumirExcelDrive(ID_EXCEL);
    
console.log(series);
    const contenedor = document.querySelector(".productos");

function mostrarSeries(lista) {

    contenedor.innerHTML = "";

    lista.forEach((serie) => {

        contenedor.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img src="${serie.texto}" class="card-img-top">

                <div class="card-body">

                    <h3>${serie.Nombre}</h3>

                    <p><strong>Género:</strong> ${serie.genero}</p>

                    <p>⭐ ${serie.puntaje}/10</p>

                    <a href="${serie.trailer}"
                       target="_blank"
                       class="btn btn-primary">
                        Ver tráiler
                    </a>

                </div>

            </div>

        </div>

        `;

    });

}
mostrarSeries(series);
const buscador = document.getElementById("buscador");

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const resultado = series.filter((serie) =>
        serie.Nombre.toLowerCase().includes(texto)
    );

    mostrarSeries(resultado);

});
});