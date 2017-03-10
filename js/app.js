var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre= prompt("Ingrese el nombre del estudiante ");
    var punTec= parseInt(prompt("Ingrese el puntaje Técnico "));
    var punHse= parseInt(prompt("Ingrese el puntaje HSE "));
    estudiante={
      estudiante.nombre=nombre.toUpperCase(),
      estudiante.punTec=punTec,
      estudiante.punHse=punHse,
    };
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre+ "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.punTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.punHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var resultado="";
    estudiantes.forEach(function(estudiante){
      resultado = resultado + mostrar(estudiante);
    });
    return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var buscados=estudiantes.filter(function (estudiante)){
      return estudiante.nombre.toLowerCase()===nombre.toLowerCase()
    };
    return buscados;
}


function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
  var estudiantesTec = estudiantes.sort(function)(a,b) {
    return b.punTec< a.punTec;
  });
  return topTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
