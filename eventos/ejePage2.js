let notas = [];
let nota = {};
let verificadoArray= []
var checkbox = document.getElementById("switch");
let titulo = document.querySelector("#title");
let contenido = document.querySelector("#content");
let contenedor = document.querySelector("#container");
let searchBar = document.getElementById("search");
let gId = 0;

function llenadoArray() {
  nota = {
    id: gId++,
    tituloNota: titulo.value,
    contenidoNota: contenido.value,
    realizada: false,
  };
  notas.push(nota);
}

function definicion() {
  contenedor.innerHTML = ""
  llenadoArray();
  imprimir(notas)
}

function borrarTarjeta(event) {
  let indice = -1;
  var tarjeta = event.target.closest(".tarjeta");
  idBuscado = tarjeta.id;

  for (let index = 0; index < notas.length; index++) {
    if (notas[index].id == idBuscado) {
      indice = index;
    }
  }

  console.log(indice + " este es mi indice");

  if (indice !== -1) {
    notas.splice(indice, 1);
    contenedor.innerHTML = "";

    imprimir(notas)
  }
}
function borrarContenido() {
  titulo.value = "";
  contenido.value = "";
}

checkbox.addEventListener("change", function() {

  // Verificar si el checkbox está marcado o no y mostrar un mensaje
  if (checkbox.checked) {
    let temporalAray=[]
    contenedor.innerHTML = "";
    for (let index = 0; index < notas.length; index++) {
      if (notas[index].realizada){
        temporalAray.push(notas[index]);}
    }
    verificadoArray=temporalAray
    imprimir(verificadoArray)
    
  } else {
    contenedor.innerHTML = "";
        imprimir(notas);
  }
});
function imprimir(notas) {
  for (let index = 0; index < notas.length; index++) {
    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.id = notas[index].id;

    nuevaTarjeta.innerHTML = `
            <div class="card bg-primary" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${notas[index].tituloNota}</h5>
                <p class="card-text">${notas[index].contenidoNota}</p>
                <button onclick="borrarTarjeta(event)" class="btn btn-danger">delete</button>
              </div>
            </div>
          `;
    contenedor.appendChild(nuevaTarjeta);

    // Crear el checkbox
    let inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("class", "form-check-input");
    inputCheckbox.checked = notas[index].realizada;

    // Agregar el checkbox al cuerpo de la tarjeta
    nuevaTarjeta.querySelector(".card-body").appendChild(inputCheckbox);

    // Agregar un event listener al checkbox para actualizar el estado
    inputCheckbox.addEventListener("change", function () {
      if (inputCheckbox.checked) {
        // Si el checkbox está marcado, aplicar el tachado a la descripción
        notas[index].realizada = true;
        nuevaTarjeta.querySelector(".card-text").style.textDecoration = "line-through";
      } else {
        // Si el checkbox no está marcado, quitar el tachado de la descripción
        notas[index].realizada = false;
        nuevaTarjeta.querySelector(".card-text").style.textDecoration = "none";
      }
    });
  }
}

searchBar.addEventListener("keyup", function() {
  let searchTerm = searchBar.value.toLowerCase();

  if (checkbox.checked){
    let filteredNotes = verificadoArray.filter(function(nota) {
      return nota.tituloNota.toLowerCase().includes(searchTerm) || 
             nota.contenidoNota.toLowerCase().includes(searchTerm);
    });
    contenedor.innerHTML = "";
    imprimir(filteredNotes);
  }
  else{let filteredNotes = notas.filter(function(nota) {
    return nota.tituloNota.toLowerCase().includes(searchTerm) || 
           nota.contenidoNota.toLowerCase().includes(searchTerm);
  });
  contenedor.innerHTML = "";
  imprimir(filteredNotes);}

  
});
