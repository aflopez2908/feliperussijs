let notas = [{tituloNota:"pepito",contenidoNota:"prueba"}];
let nota = {};
let titulo = document.querySelector("#title");
let contenido = document.querySelector("#content");
let gId=0

function llenadoArray(){
    nota = {
        id:gId++,
        tituloNota: titulo.value,
        contenidoNota: contenido.value,
        realizada:false
      };
      notas.push(nota);
    
      console.log(notas);

}

function crearNota() {
    document.getElementById("container").innerHTML = "";

    llenadoArray()

  for (let index = 0; index < notas.length; index++) {
    console.log(notas[index]);
    let divCard = document.createElement("div");
    divCard.classList.add("card", "bg-primary");
    divCard.style.width = "10rem";

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    let tituloElemento = document.createElement("h5");
    tituloElemento.classList.add("card-title");
    tituloElemento.textContent = notas[index].tituloNota;

    let contenidoElemento = document.createElement("p");
    contenidoElemento.classList.add("card-text");
    contenidoElemento.textContent = notas[index].contenidoNota;

    let btnPrimary = document.createElement("button");
    btnPrimary.classList.add("btn", "btn-primary");
    btnPrimary.textContent = "Go somewhere";

    let btnDanger = document.createElement("button");
    btnDanger.classList.add("btn", "btn-danger");
    btnDanger.textContent = "Go somewhere";

    divCardBody.appendChild(tituloElemento);
    divCardBody.appendChild(contenidoElemento);
    divCardBody.appendChild(btnPrimary);
    divCardBody.appendChild(btnDanger);

    divCard.appendChild(divCardBody);

    let container = document.getElementById("container");
    container.appendChild(divCard);
  }
}

function borrarContenido() {
  var div = document.getElementById("container");
  div.innerHTML = ""; // Establecer el contenido del div como una cadena vacía
  notas = [];
}
