/*eje 1*/

 console.log("---------------------------1")
 let num1Eje1=10
 let num2Eje1=2
 let estadoEje1=""

 if (num1Eje1>num2Eje1){
     estadoEje1= " es mayor"

 }else{
     estadoEje1= " no es mayor"
 }


console.log("el primer numero es" +estadoEje1)

/*eje 2*/
console.log("---------------------------2")
let num1Eje2=10
let num2Eje2=2
let estadoEje2=""

if (num1Eje2==num2Eje2){
    estadoEje2= " son iguales"

}else{
    estadoEje2= " son diferentes"
}


console.log("los numeros" +estadoEje2)

/**eje 3 */
console.log("---------------------------3")
let num1Eje3=10
let num2Eje3=200
let estadoEje3=""

if (num1Eje3==num2Eje3){
    estadoEje3= " son iguales"
}
else if (num1Eje3>num2Eje3){
    estadoEje3= "el numero 1 es mayor que el 2"
}else{
    estadoEje3= "el numero 2 es mayor que el 1"
}


console.log(estadoEje3)

/*eje 4*/
console.log("---------------------------4")
let num1Eje4=10
let num2Eje4=200
let num3Eje4=11
let estadoEje4=""

if (num1Eje4<num2Eje4 && num2Eje4<num3Eje4){
    estadoEje4= "el numero" + num1Eje4 +" es el menor"
}
else if (num2Eje4<num1Eje4 && num1Eje4<num3Eje4){
    estadoEje4= "el numero" + num2Eje4 +" es el menor"
}else{
    estadoEje4= "el numero " + num3Eje4 +" es el menor"
}
console.log(estadoEje4)

/**eje 5 */

console.log("---------------------------5")

let persona1 ={

    nombre:"felipe",
    edad: 20,
    altura: 130
}
let persona2 ={

    nombre:"camilo",
    edad: 19,
    altura: 180
}

if (persona1.altura<persona2.altura){

    console.log(persona2.nombre + " es mas alto")

    if (persona1.edad<persona2.edad){
        console.log(persona2.nombre + " es mayor" )}

    else{
        console.log(persona1.nombre + " es mayor" )
    }
}

else{
    console.log(persona1.nombre + " es mas alto")

}

/**eje 6 */

console.log("---------------------------6")

nombre = prompt("Ingrese su nombre compreto")
edad = parseInt(prompt("Ingrese su edad en numeros"))
altura = parseInt(prompt("Ingrese su altura en cm"))
vision = parseInt(prompt("Ingrese su nivel de vision de 1 a 10"))

if(edad>=18 && altura>=150 && vision>=8){
    console.log("eres apto");
}
else{
    console.log("no eres apto");
}

/**eje 7 */

console.log("---------------------------7")

let miNombre7="felipe"
let entra="no"
let nombreEje7 =prompt("Ingrese su nombre").toLowerCase()
console.log(nombreEje7)
let paseVip = prompt("Ingrese si tiene pase VIP s (si) o n (no)").toLowerCase()
let entrada7 =prompt("Ingrese si tiene entrada s (si) o n (no)").toLowerCase()



if (miNombre7== nombreEje7 || paseVip=="s" ){
    entra="si"

}


else if(entrada7== "s"){
    entra="si"
}

else{

    desition= prompt("desea comprar entrada?")
    if (desition=="s"){
        dinero=parseInt(prompt("cuanto dinero tiene"))
        if(dinero>1000){
            entra="si"
        }
    }


}

if (entra=="si"){
    console.log("bienvenido si puedes entrar");

}
else{
    console.log("no eres bienvenido");
}


/**eje 8 */

let numeroincog= (Math.round(Math.random()*10))
console.log(numeroincog);

let adivina= parseInt(prompt("numero?"))


switch (true) {
    case adivina===numeroincog:
        console.log("ganaste")

        break

    case (adivina < numeroincog):
        console.log("el numero ingresado es menor")
        break
    case (adivina > numeroincog):
        console.log("el numero ingresado es mayor")
        break
    default:
        break
}

adivina= parseInt(prompt("numero?"))


switch (true) {
    case adivina===numeroincog:
        console.log("ganaste")

        break

    case (adivina < numeroincog):
        console.log("el numero ingresado es menor")
        break
    case (adivina > numeroincog):
        console.log("el numero ingresado es mayor")
        break
    default:
        break
}
adivina= parseInt(prompt("numero?"))


switch (true) {
    case adivina===numeroincog:
        console.log("ganaste")
        break
    case adivina != numeroincog:
        console.log("perdiste");




/*eje 9*/

let edadEje9= parseInt(prompt("ingrese edad"))

if (edadEje9>0 && edadEje9<=12){
    console.log("eres un infante");
}

else if (edadEje9>12 && edadEje9<=18){
    console.log("eres un adolescente");

}

else if (edadEje9>18 && edadEje9<=45){
    console.log("eres un mayor joven");

}
else if (edadEje9>100){
    console.log("en realidad tienes esa edad?");

}


/*eje 10*/



let jugador1= prompt("seleccion jugador 1? ").toUpperCase()
let jugador2= prompt("seleccion jugador 2? ").toUpperCase()

if (jugador1==jugador2){
    console.log("empate");
}

else if(jugador1==="PAPEl" && jugador2==="PIEDRA"){
    console.log("JUGADOR 1 GANA");
}

else if(jugador1==="TIJERA" && jugador2==="PAPEL"){
    console.log("JUGADOR 1 GANA");
}

else if(jugador1==="PIEDRA" && jugador2==="TIJERA"){
    console.log("JUGADOR 1 GANA");
}
else{
    console.log("JUGADOR 2 GANA");
}


/**eje 11 */

let color = prompt("digame su color").toLowerCase()

switch (color) {
    case "blanco":
        console.log("falta color");

        break;
    case "negro":
        console.log("falta color");

        break;
    case "verde":
        console.log("el color de la naturaleza");

        break;
    case "azul":
        console.log("el color del agua");

        break;
    case "amarillo":
        console.log("el color del sol");

        break;
    case "rojo":
        console.log("el color del fuego");

        break;
    case "marron":
        console.log("el color de la tierra");

        break;


    default:
        console.log("no lo teniamos pensado");
        break;
}


/**eje 12 */
 let num1eje12 = parseInt(prompt("digame un numero"))

 let num2eje12 = parseInt(prompt("digame otro numero"))


 let operacionEje12 = parseInt(prompt("digame la operacion en numeros (suma(1), resta(2) ,multiplicacion(3) o division(4))"))

 if (operacionEje12 == 1) {
     console.log(num1eje12 + num2eje12);
 }

 else if (operacionEje12 ==2) {
    console.log(num1eje12 - num2eje12);
}
else if (operacionEje12 ==3) {
    console.log(num1eje12 * num2eje12);
}

else if (operacionEje12 ==4) {
    if (num2eje12!=0){
        console.log(num1eje12 / num2eje12);  
    }
    else{
        console.log("no se permite la division entre 0");
    }

}

else{
    console.log("operador no valido12");
}


/**eje 13 */

let numero = prompt("Ingrese el número de su DNI:");
let nombres = prompt("Ingrese sus nombres:");
let apellidos = prompt("Ingrese sus apellidos:");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");
let sexo = prompt("Ingrese su sexo:");
let direccion = prompt("Ingrese su dirección:");


console.log("=== Datos ingresados ===");
console.log("Número de DNI:", numero);
console.log("Nombres:", nombres);
console.log("Apellidos:", apellidos);
console.log("Fecha de Nacimiento:", fechaNacimiento);
console.log("Sexo:", sexo);
console.log("Dirección:", direccion);


let confirmacion = confirm("¿Los datos ingresados son correctos?");

if (confirmacion) {

    let dni = {
        numero: numero,
        nombres: nombres,
        apellidos: apellidos,
        fechaNacimiento: fechaNacimiento,
        sexo: sexo,
        direccion: direccion
    };

    console.log("=== Registro exitoso ===");
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}