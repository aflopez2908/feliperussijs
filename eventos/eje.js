function establecerValorEnInput() {
    let altura = document.querySelector('#alturaform').value;
    let peso = document.querySelector('#pesoform').value;
    let imc = peso / (altura / 100);
    // Selecciona el primer elemento con la clase "resultado"
    let resultado = document.querySelector(".resultado");
    // Actualiza el contenido del elemento con el IMC calculado
    resultado.textContent = "El IMC es: " + imc.toFixed(2); // Redondea el IMC a dos decimales
}



    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    
    input1.addEventListener('input', function() {
        input2.value = input1.value * 4000;
    });
    input2.addEventListener('input', function() {
        input1.value = input2.value / 4000;
    });
















