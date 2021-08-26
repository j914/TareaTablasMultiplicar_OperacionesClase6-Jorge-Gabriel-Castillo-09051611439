function multi() {
  num = document.getElementById("num").value;
  num = parseInt(num);

  for (var i = 1; i <= 10; i++) {
    multi = num * i;
    document.write(num + "X" + i + "=" + multi + "<br>");
  }
}

const operaciones = ["MULTIPLICACION","SUMA", "RESTA", "DIVISION"];
const signosOps = {
  MULTIPLICACION: "*",
  SUMA: "+",
  RESTA: "-",
  DIVISION: "/",
};
/**
 *
 */
function operacionesFun() {
  // obtener el contenedor de los resultados
  const contenedor = document.getElementById("contenedor");
  // obtener los antiguos resultados si existen
  const oldResultados = document.getElementById("resultados");

  // si el elemento resultados existe lo elimina para agregar uno nuevo
  if (oldResultados) oldResultados.remove();

  // se crea un nuevo div de resultados
  const resultados = document.createElement("div");
  // se le asigna el id para ser identificado posteriormente
  resultados.id = "resultados";

  // SE MAPEAN TODAS LAS OPERACIONES QUE SE TIENEN DISPONIBLES
  operaciones.forEach((opera) => {
    // SE CREA LA ETIQUETA H4 PARA EL TITULO
    const titulo = document.createElement("h4");
    // SE GENERA UN SALTO DE LINEA POR CADA UNA DE LAS OPERACIONES
    const salto = document.createElement("br");
    // SE OBTIENE EL VALOR DE INPUT
    let valor = document.getElementById("ops").value;
    // COMO ES UN STRING SE PARSEA A INT
    valor = parseInt(valor);
    // AL TITULO SE LE ASIGNA EL NOMBRE DE LA OPERACION QUE SE EJECUTA
    titulo.innerText = opera;
    // SE AGREGA EL TITULO AL DIV DE RESULTADOS
    resultados.appendChild(titulo);
    // SE EJECUTA UN BUCLE CON UN TOTAL DE OPERACIONES A EJECUTAR DEL 1 A 10 EN SUS VALORES RESPECTIVOS
    for (var i = 1; i <= 10; i++) {
      // SE CREA EL OBJETO VALORES
      const valores = {
        primero: valor,
        segundo: i,
      };
      // SE LLAMA A OPERAR LOS VALORES SEGUN EL TIPO DE LA OPERACION
      const resultado = operar(valores, opera);
      // SE CREA UN NUEVO PARRAFO QUE CONTENDRA LA DESCRIPCION DE LA OPERACION 
      const linea = document.createElement("p");
      // signosOps[opera] obtiene el signo respectivo segun el tipo de operacion
      linea.innerText = valor + signosOps[opera] + i + "=" + resultado;
      // SE ASIGNA EL PARRAFO AL DIV RESULTADOS
      resultados.appendChild(linea);
    }
    // SE HACE UN SALTO DE LINEA
    resultados.appendChild(salto);
  });
  // AL CONTENEDOR SE LE ASIGNAN LOS NUEVOS RESULTADOS
  contenedor.appendChild(resultados);
}
/**
 *
 * @param {*} valores primero y segundo valor
 * @param {*} tipo ["mult", "RESTA", "MULTIPLICACION", "DIVISION"]
 * @returns
 */
function operar(valores, tipo) {
  switch (tipo) {
    case operaciones[1]: // RESTA
      return valores.primero + valores.segundo;
    case operaciones[2]: // Sum
      return valores.primero + valores.segundo;
    case operaciones[3]: // DIVI
      return valores.primero + valores.segundo;
    default:
      // mult
      return valores.primero + valores.segundo;
  }
}
