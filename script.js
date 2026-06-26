import { consumirExcelDrive } from "./consumirExcelDrive.js";

const ID_EXCEL = "1GaD487ksKiPYrDaQV-RdOv-1xC5iA-rZ4kZrsiXCo5A";

document.addEventListener("DOMContentLoaded", async ()=>{

    const series = await consumirExcelDrive(ID_EXCEL);

    const contenedor=document.querySelector(".productos");

    series.forEach((serie)=>{

        contenedor.innerHTML+=`

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img src="${serie.imagen}" class="card-img-top">

                <div class="card-body">

                    <h3>${serie.nombre}</h3>

                    <p><strong>Género:</strong> ${serie.genero}</p>

                    <p>⭐ ${serie.puntaje}</p>

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

});