
//------------ejercicio
//1
let miNombre= "felipe"

//2
let miApellido="russi"
//3
let miEdad=20
//4
let miMascota="lebron"
//5
let edadMascota=4
//6
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
//7
let nombreCompleto= miNombre+miApellido
//8
let textoPresentacion= miNombre+miApellido+miEdad+miMascota+edadMascota
//9
let sumaEdades= miEdad+edadMascota
let restaEdades=miEdad-edadMascota
let productoEdades= miEdad*edadMascota
let divisionEdades= miEdad/edadMascota

//10
miNombre = prompt("Ingrese su nombre")
miApellido = prompt("Ingrese su apellido")
miEdad = parseInt(prompt("Ingrese su edad"))
miMascota = prompt("Ingrese el nombre de su mascota")
edadMascota = parseInt(prompt("Ingrese la edad de su mascota"))

nombreCompleto = miNombre + " " + miApellido
textoPresentacion =
  "Hola, mi nombre es " +
  nombreCompleto +
  " tengo " +
  miEdad +
  " años y mi mascota se llama " +
  miMascota +
  " y tiene " +
  edadMascota +
    " años.";

sumaEdades = miEdad + edadMascota
restaEdades = miEdad - edadMascota
productoEdades = miEdad * edadMascota
divisionEdades = miEdad / edadMascota

console.log(textoPresentacion)
console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

//11
let alumno ={

    nombre:"felipe",
    edad: 20,
    grado: 5,
    sexo: "masculino",
    mascota:false

}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.grado)
console.log(alumno.sexo)
console.log(alumno.mascota)

//12

let mascota ={

    nombre:"lebron",
    edad: 5,
    patas:4,
    raza: "crioyo",
    color:"negro"

}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.patas)
console.log(mascota.raza)
console.log(mascota.color)

//13

let frutas = ["mango", "papaya","curuba","guanabana","banano"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//14

let numeros = [1,2,3,4,5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//15

let familia = [
    { nombre: "mauricio", edad: 40, relacion: "padre" },
    { nombre: "María", edad: 30, relacion: "madre" },
    { nombre: "camila", edad: 18, relacion: "hija" },
    { nombre: "andres", edad: 85, relacion: "hijo" },
    { nombre: "Carlos", edad: 70, relacion: "abuelo" }
  ];

//16
let textoAleatorio= frutas[1]+""+ numeros[3] +numeros[4] 

//17
miEdad = parseInt(prompt("Ingrese su edad"))
edadcompanero = parseInt(prompt("Ingrese edad compa"))
//a
console.log("Mi edad es igual a la de mi compañero" + miEdad==edadcompanero)
//b
console.log("Mi edad es mayor a la de mi compañero"+miEdad>edadcompanero)
//c
console.log("Mi edad es menor a la de mi compañero"+miEdad<edadcompanero)

// 18
let edad = parseInt(prompt("Por favor, ingresa tu edad:"))
let soyMayorDeEdad = edad >= 18
console.log("Soy mayor de edad:", soyMayorDeEdad)

// 19
let edadPersona = parseInt(prompt("Por favor, ingresa tu edad:"))
let alturaPersona = parseInt(prompt("Por favor, ingresa tu altura en cm:"))
let puedeSubir = edadPersona > 6 && alturaPersona >= 120
console.log("Puede subir a la atracción:", puedeSubir)

// 20
let tipoPase = prompt("Por favor, ingresa el tipo de pase (VIP, NORMAL o LIMITADO):").toUpperCase()
let saldo = parseFloat(prompt("Por favor, ingresa tu saldo disponible:"))
let puedePasar = tipoPase === "VIP" || saldo > 1000
console.log("La persona puede pasar:", puedePasar)




