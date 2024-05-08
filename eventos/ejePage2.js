let notas = [];
let nota = {};
let titulo = document.querySelector("#title");
let contenido = document.querySelector("#content");
let gId=1

function llenadoArray(){
    nota = {
        id:gId++,
        tituloNota: titulo.value,
        contenidoNota: contenido.value,
        realizada:false
      };
      notas.push(nota);
}



function crearNota() {
    document.getElementById("container").innerHTML = "";
    llenadoArray()

  for (let index = 0; index < notas.length; index++) {

    let divCard = document.createElement("div");
    divCard.classList.add("card", "bg-primary","m-1");
    divCard.style.width = "10rem";

    divCard.id = index;

   let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    let contenidoElemento = document.createElement("p");
    contenidoElemento.classList.add("card-text");
    contenidoElemento.textContent = notas[index].contenidoNota;


    let inputCheckbox = document.createElement("input");


    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("class", "form-check-input");
    inputCheckbox.setAttribute("value", "");
    inputCheckbox.setAttribute("id", "flexCheckChecked");
    inputCheckbox.checked = notas[index].realizada;
    // Agregar un listener de evento al checkbox para manejar el cambio de estado
    inputCheckbox.addEventListener("change", function() {
    if (this.checked) {
      // Si el checkbox está marcado, aplicar el tachado a la descripción
      contenidoElemento.style.textDecoration = "line-through";
      notas[index].realizada=true
      
    } else {
      // Si el checkbox no está marcado, quitar el tachado de la descripción
      contenidoElemento.style.textDecoration = "none";
      notas[index].realizada=false
    }
  });


    let tituloElemento = document.createElement("h5");
    tituloElemento.classList.add("card-title");
    tituloElemento.textContent = notas[index].tituloNota;



    let btnDanger = document.createElement("button");
    btnDanger.classList.add("btn", "btn-danger");
    btnDanger.textContent = "eliminar";

     btnDanger.onclick = function() {
      eliminarNota(divCard.id); 
    };


    divCardBody.appendChild(tituloElemento);
    divCardBody.appendChild(inputCheckbox)
    divCardBody.appendChild(contenidoElemento);
    divCardBody.appendChild(btnDanger);

    divCard.appendChild(divCardBody);

    let container = document.getElementById("container");
    container.appendChild(divCard);

  }

  function eliminarNota(id) {
    // Obtener el elemento de la carta
    var carta = document.getElementById(id);
    notas.splice(parseInt(id), 1);
    gId=(notas.length+1)
    for (let nuevo = 0; nuevo < notas.length; nuevo++) {
        notas[nuevo].id=nuevo
    }

    carta.parentNode.removeChild(carta);

  }
}




function borrarContenido() {
  titulo.value=""
  contenido.value=""
}






