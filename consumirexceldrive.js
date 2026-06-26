export async function consumirExcelDrive(idExcel){

    const url = `https://docs.google.com/spreadsheets/d/${idExcel}/gviz/tq?tqx=out:csv`;

    const respuesta = await fetch(url);

    const texto = await respuesta.text();

    const filas = texto.trim().split("\n");

    const encabezados = filas[0].split(",");

    const datos = filas.slice(1).map(fila=>{

        const columnas = fila.split(",");

        let objeto={};

        encabezados.forEach((encabezado,index)=>{

            objeto[encabezado.trim()] = columnas[index]?.replaceAll('"',"").trim();

        });

        return objeto;

    });

    return datos;

}