/**eje1 */

// let numero = parseInt(prompt("numero?"))

// for (let i = 1; i < 11; i++) {
//     const multi = numero*i;
//     console.log(multi);
    
// }

/**eje 2 */

// let entrada= 1
// let suma=0

// while (entrada != 0) {

//     entrada= parseInt(prompt("diga un numero"))
//     suma= suma+ entrada
//     console.log(suma); 
// }
/**eje 3 */
// let adivine= parseInt(prompt("numero"))
// let numero= Math.round((Math.random())*100)
// let intentos=0
// console.log(numero);
// while (adivine!= numero) {
//     if (numero>adivine){
//         console.log("el numero ingresado es menor");
//     }
//     else{
//         console.log("el numero ingresado es mayor");
//     }
//     adivine= parseInt(prompt("numero"+numero)) 
//     intentos++
// }
// console.log("ganoooooo en "+ intentos + " intentos");

/**eje 4 */
// let numero= parseInt(prompt("numero"))
// let operacion=0
// let  conta=0
// let primo="es primo"
// for (let index = 0; index < numero+1; index++) {
//     if (numero% index=== 0){
//         conta++
//         if (conta>2){
//             primo="no es primo"
//             break
//         }

//     }    
// }
// console.log(primo);

/**eje 5 */
// let numero= parseInt(prompt("numero"))

// for (let index = 0; index < numero+1; index++) {
//         if (numero% index=== 0){
//             console.log(index);
//         }    
//     }


/**eje 6 */

// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const iterator of miArray) {
//     console.log(iterator);
    
// }

/**eje 7 */

// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const iterator of miArray) {
//     console.log(iterator*2);
    
// }

/**eje8 */

// let familia = [
//     { nombre: "Juan", edad: 35, relacion: "padre", ocupacion: "ingeniero" },
//     { nombre: "María", edad: 33, relacion: "madre", ocupacion: "doctora" },
//     { nombre: "Pedro", edad: 10, relacion: "hijo", ocupacion: "estudiante" },
//     { nombre: "Ana", edad: 8, relacion: "hija", ocupacion: "estudiante" },
//     { nombre: "Abuela", edad: 70, relacion: "abuela", ocupacion: "jubilada" }
//   ];

// for (const iterator of familia) {
//     console.log(`hola mi nombre es ${iterator.nombre} tengo una edad de 
//     ${iterator.edad} en la familia mi rol es ${iterator.relacion} y mi ocupacion es ser
//     ${iterator.ocupacion}`);
    
// }

/**eje 9 */
// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const iterator of miArray) {
//     if (iterator%2 != 0){
//         console.log(iterator);

//     }
// }

/**eje 10 */

// let entrada=null
// let par=0
// let impar=0

// while (entrada != 0) {

//     entrada= parseInt(prompt("diga un numero"))
//         if (entrada%2 != 0){
//         impar=impar+entrada

//     }
//     else{
//         par=par+entrada

//     }
// }
// console.log(`la suma par es ${par}`);
// console.log(`la suma impar es ${impar}`);

/**11 */
// let numerosDesordenados = [8, 3, 6, 1, 9, 4, 7, 2, 10, 5];
// function menor(array){
//         let numero=-10000000
//         for (let indexj = 0; indexj < array.length; indexj++) {
//             if (numero<array[indexj]){
//                 numero=array[indexj]   
//             }
//         }
//         console.log(numero);
//     }
// menor(numerosDesordenados)

/**12 */
// let numerosDesordenados = [8, 3, 6, 1, 9, 4, 7, 2, 10, 5];
// function menor(array){
//         let numero=10000000
//         for (let indexj = 0; indexj < array.length; indexj++) {
//             if (numero>array[indexj]){
//                 numero=array[indexj]   
//             }
//         }
//         console.log(numero);
//     }
// menor(numerosDesordenados)

/**13 */
// let nombre1=prompt("nombre jugador 1")
// let nombre2=prompt("nombre jugador 2")
// let jugador1
// let jugador2

// while (true){

// jugador1= prompt("seleccion jugador 1? ").toUpperCase()
// jugador2= prompt("seleccion jugador 2? ").toUpperCase()
// if (jugador1==jugador2){
//     console.log("empate");
// }

// else if(jugador1==="PAPEl" && jugador2==="PIEDRA"){
//     console.log("JUGADOR 1 GANA " + nombre1);
//     break
// }

// else if(jugador1==="TIJERA" && jugador2==="PAPEL"){
//     console.log("JUGADOR 1 GANA " + nombre1);
//     break
// }

// else if(jugador1==="PIEDRA" && jugador2==="TIJERA"){
//     console.log("JUGADOR 1 GANA " + nombre1);
//     break
// }
// else{
//     console.log("JUGADOR 2 GANA "+ nombre2);
//     break
// }
// }

/**14 */

// for (let index = 1; index < 6; index++) {
//     let line = "";
//     for (let i = 0; i < index; i++) {
//         line += "*";
//     }
//     console.log(line);
// }

// /**15 */
// for (let index = 5; index > 0; index--) {
//     let line = "";
//     for (let i = 0; i < index; i++) {
//         line += "*";
//     }
//     console.log(line);
// }




/**16 */
// function menor(array){
//     let numero=1000000
//     for (let indexj = 0; indexj < array.length; indexj++) {
//         if (numero>array[indexj]){
//             numero=array[indexj]   
//         }
        
//     }
//     return(numero)
// }
// function encontrarIndice(array,numero){
//     let index
//     for (let indice = 0; indice < array.length; indice++) {

//             if (array[indice]== numero){
//                 index=indice
//                 break
//             }  
//         }
//     return index
// }

// let numerosDesordenados = [8, 3, 6, 1, 9, 4, 7, 2, 10, 5];
// let numerosOrdenados=[]
// let indice=0
// let menori
// let maximo=numerosDesordenados.length

// for (let index = 0; index < maximo; index++) {

//     menori=menor(numerosDesordenados)
//     numerosOrdenados.push(menori)
//     indice=encontrarIndice(numerosDesordenados,menori)
//     numerosDesordenados.splice(indice,1)

// }
// console.log(numerosOrdenados);