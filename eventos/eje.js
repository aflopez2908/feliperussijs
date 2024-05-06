function establecerValorEnInput() {
    let altura = document.querySelector('#alturaform').value;
    console.log('El valor del input de altura es: ' + altura);

    let peso = document.querySelector('#pesoform').value;
    console.log('El valor del input de peso es: ' + peso);

    let imc = peso / (altura / 100);
    console.log("El IMC es " + imc);

    // Selecciona el primer elemento con la clase "resultado"
    let resultado = document.querySelector(".resultado");
    
    // Actualiza el contenido del elemento con el IMC calculado
    resultado.textContent = "El IMC es: " + imc.toFixed(2); // Redondea el IMC a dos decimales
}
