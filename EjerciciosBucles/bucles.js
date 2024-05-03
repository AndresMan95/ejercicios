//1. tabla de multiplicar
let tabla = parseInt(prompt('ingrese numero para multiplicar'))
for (i = 0; i <= 9; i++) {
    console.log(`${tabla * i}`)
}


// el 2 con while 
let numer = parseInt(prompt('ingrese un numero para acumular o 0 para salir'))
let suma = numer
while (numer != 0) {
    numer = parseInt(prompt('ingrese otro numero o 0 cero para terminar'))
    suma += numer
}
console.log(suma)

// 3. adivinar el numero 
let numeroDecimal = Math.random()
let numeroRango = numeroDecimal * 100

let numeroIngresado = Math.floor(numeroRango) + 1
let intentos = 0
let numeroUser = 0
do {
    numeroUser = parseInt(prompt('ingrese numero del 1 al 100'))

    if (numeroIngresado < numeroUser ) {
        console.log('el numero adivinar es menor')
    } else if (numeroIngresado > numeroUser) {
        console.log('el numero es adivinar es mayor')
    }
    intentos++
}
while (numeroIngresado != numeroUser);
console.log(`Adivinaste el numero es ${numeroIngresado} y el numero de intentos fue ${intentos}`)

//4. numero primo


let numeroPrimo = parseInt(prompt('ingrese numero'))
let contadorTrue = 0


for (i = 1; i <= numeroPrimo; i++) {

    if (numeroPrimo % i == 0) {
        contadorTrue++
    }
}
if (contadorTrue == 2) {
    console.log(`el numero ${numeroPrimo} es primo`)
}
else {
    console.log(`el numero ${numeroPrimo} no es primo`);
}


// 5. mostrar divisores de un numero

let numeroDivisor = parseInt(prompt('ingrese numero'))
for (i = 1; i <= numeroDivisor; i++) {
    if (numeroDivisor % i == 0) {
        console.log(`divisor ${i}`);
    }
}

//6. array de 10 elementos y mensaje por cada elemento

let cosas = ['casa', 'carro', 'celular', 'moto', 'avion', 'mouse', 'laptop', 'bici', 'balon', 'pesas']

for (i = 0; i < cosas.length; i++) {
    console.log(cosas[i])
}

//7. array de 10 numeros recorriendolo e imprimiendo el doble de su valor


let numerosArray = [34, 56, 43, 21, 67, 84, 27, 93, 12, 91]
for (i = 0; i < numerosArray.length; i++) {
    console.log(numerosArray[i] * 2);

}
//8. 5 objetos con 4 propiedades cada uno, y mostrar un mensaje de presentacion por cada elemento

let grupoFamiliar = [{ nombre: 'Javier', parentesco: 'Abuelo', hijos: 3, edad: 78 }, { nombre: 'Luis', parentesco: 'padre', hijos: 5, edad: 50 }, { nombre: 'Lucia', parentesco: 'tia', hijos: 0, edad: 35 }, { nombre: 'David', parentesco: 'hijo', hijos: 1, edad: 28 }, { nombre: 'Juliana', parentesco: 'madre', hijos: 5, edad: 43 }]

for (i = 0; i < grupoFamiliar.length; i++) {
    console.log(`Mi nombre es ${grupoFamiliar[i].nombre}, soy ${grupoFamiliar[i].parentesco} de la familia y tengo ${grupoFamiliar[i].edad} años con ${grupoFamiliar[i].hijos} hijos`)
}

//9. array de 10 numeros mostrando los impares

let arrayNumbers = [39, 48, 93, 62, 467, 372, 842, 7342, 3256, 753]

for (i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 != 0) {
        console.log(`el numero ${arrayNumbers[i]} es impar`);
    }
}
//10. ingresar numeros y sumar los pares e impares 

let sumaPar = 0
let sumaImpar = 0
let numeroPare = 1

while (numeroPare != 0) {
    numeroPare = parseInt(prompt('ingreso de numero o 0 para terminar'))
    if (numeroPare % 2 == 0) {
        sumaPar += numeroPare
    }
    else {
        sumaImpar += numeroPare
    }
    console.log(`La suma de numeros pares es ${sumaPar} y la suma de numeros impares es ${sumaImpar}`)
}

//11. array de 10 numeros, imprimir el mas grande

let numeroGrande = [15434, 775, 3123, 63, 123, 424, 4234, 4567, 17000, 34032]
/* let numerOrdenado=numeroGrande.sort((a,b)=> a-b)
console.log(numerOrdenado[9]); */

let bigNumber = numeroGrande[0]


for (i = 1; i < numeroGrande.length; i++) {
    if (numeroGrande[i] > bigNumber) {
        bigNumber = numeroGrande[i]
    }

}
console.log(`el numero mas grande es ${bigNumber}`)

//12. array de 10 numeros que imprima el mas pequeño

let numeroChico = [234, 523, 422, 122, 4565, 103, 432, 94, 231, 99]

smallNumber = numeroChico[0]

for (i = 1; i < numeroChico.length; i++) {
    if (numeroChico[i] < smallNumber) {
        smallNumber = numeroChico[i]
    }
}

console.log(`el numero mas pequeño es ${smallNumber}`);
// 13. piedra, papel o tijera. ingresar nombre de 2 jugadores, mensaje de persona ganadora, en caso de empate seguir jugando

let player1 = prompt('ingresa nombre player 1')

let player2 = prompt('ingresa nombre player 2')

let juego1,juego

do {
    juego1 = prompt(`${player1} ingrese piedra, papel o tijera`);
    juego2 = prompt(`${player2} ingrese su opción`);

    if (juego1 === juego2) {
        console.log('Empate, sigamos jugando');
    } else if ((juego1 === 'piedra' && juego2 === 'tijera') || (juego1 === 'papel' && juego2 === 'piedra') || (juego1 === 'tijera' && juego2 === 'papel')) {
        console.log(`¡El ganador es ${player1}!`);
    } else if ((juego1 === 'piedra' && juego2 === 'papel') || (juego1 === 'papel' && juego2 === 'tijera') || (juego1 === 'tijera' && juego2 === 'piedra')) {
        console.log(`¡El ganador es ${player2}!`);
    }
} while (juego1 === juego2);



// 14. triangulo con 5 ateristicos
for (i = 0; i < 6; i++) {
    let aterisco = ''
    for (j = 1; j <= i; j++) {
        aterisco += '*'

    }
    console.log(aterisco)
}

// 15. triangulo invertido con 5 asteristicos 
for (i = 5; i >= 1; i--) {
    let aterisco = ''
    for (j = 1; j <= i; j++) {
        aterisco += '*'

    }
    console.log(aterisco)
}

//16. 10 numeros desordenados, imprimir el array de manera ordenada 
let orden=0
let desorden =[234,4321,321,945,12,9453,743,9823,3452,124]

for(i=1; i<desorden.length;i++){

    for(j=0;j<(desorden.length-i);j++){
        if(desorden[j]>desorden[j+1]){
            orden=desorden[j]
            desorden[j]=desorden[j+1]
            desorden[j+1]=orden
        }
    }
}
console.log(`el orden de la lista array de 10 numeros es ${desorden}`);