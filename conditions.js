//1. numero mayor ante dos entradas
let numero1=50
let numero2=40
if (numero1>numero2){
    console.log(`el numero ${numero1} es mayor`)
}
else{
    console.log(`el primer numero no es mayor que el segundo numero ${numero2} `)
}
//2. numeros iguales o diferentes
let num1=30
let num2=20

if(num1==num2){
    console.log(`los numeros son iguales`)
}else{
    console.log('los numeros no son iguales')
}
//3. numeros iguales o mayor
let nu1=33
let nu2=35
if(nu1>nu2){
    console.log(`the first number is greater`)
}
    else if( nu1<nu2 ){
    console.log('el segundo numero es mayor')}
    else{
        console.log('los numeros son iguales')
    }

// 4. numero menor en 3 numeros

let number1=32
let number2=39
let number3=31

if (number1<number2 & number1<number3){
    console.log('el primer numero es menor')
}else if(number2<number1 & number2<number3){
    console.log('el segundo numero es menor')    
}else{
    console.log('el tercer numero es menor')
}

//5. 2 personas cual es mas alto y cual es mayor

let person1={nombre:"carlos", edad:23, altura:157 }
let person2={nombre:"Helena", edad:22, altura:154}

if (person1.edad<person2.edad & person1.altura<person2.altura){
    console.log(`${person2.nombre} es mayor y mas alta`)
} else if(person1.edad>person2.edad & person1.altura<person2.altura) {
    console.log(`${person1.nombre} es mayor y ${person2.nombre} es mal alta`)
} else if(person1.edad<person2.edad & person1.altura>person2.altura){
    console.log(`${person2.nombre} es mayor  y ${person1.nombre} es mas alto`)
} else {
    console.log(`${person1.nombre} es mayor y mas alto`)
}
//6. ingresar datos y determinar si puede conducir 

let persona1= {}


persona1.nombre=prompt('Por favor ingresa tu nombre')
persona1.edad=parseInt(prompt('Ahora cual es tu edad'))
persona1.altura=parseFloat(prompt('Y tambien cual es tu altura'))
persona1.vision=parseInt(prompt('y por ultimo tu rango de vision de 1 a 10'))

console.log(persona1)

if(persona1.edad >= 18 & persona1.altura>150 & persona1.vision>=8){
    console.log(`${persona1.nombre} esta capacitado para manejar`)
}else{
    console.log('Lo sentimos no tienes permitido conducir')
}

//7. 
let datos={}
datos.nombre=prompt('ingrese su nombre')
datos.pase=prompt('Tipo de pase VIP o NORMAL')
datos.entrada=prompt('¿Tienes entrada? (S o N)')

if(datos.nombre=='Andres'|| datos.pase=='VIP'  ){
    console.log(`Bienvenido ${datos.nombre}`)
} else if(datos.entrada=='S') {
 datos.usar= prompt('desea usar la entrada (S o N)')
 if(datos.usar=='S'){
    console.log(`Bienvenido ${datos.nombre}`)
 }else{
    console.log('Pruebe nuevamente')
 }

}else if (datos.entrada=='N'){
    datos.comprar=prompt('desea comprar la entrada (S / N)')
    if(datos.comprar=='S'){
    datos.dinero=parseFloat(prompt('Ingrese dinero disponible'))

    }if(datos.dinero>=1000){
        console.log(`Bienvenido ${datos.nombre} Entrada procesada`)
    } else{
        console.log('Venta rechazada, dinero insuficiente')
    }
}
else{
    console.log('Lo sentimos no puede ingresar')
}
//8. juego de adivinanza 
let numeroIncognita= parseInt(prompt('ingrese numero entre 1 y 10'))

let numeroDecimal= Math.random()
let numeroRango= numeroDecimal*10

let numeroIngresado=Math.floor(numeroRango)+1
/* let numeroIngresado=3 */
let intentos=0

if(intentos>3 ){
    console.log('Maximo de intentos')
}

else if (numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita<numeroIngresado){
intentos=intentos+1
 console.log('numero ingresado es menor, vuelve a intentarlo')
    numeroIncognita=prompt('ingresa un numero mayor')
} if(numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita<numeroIngresado){
    intentos=intentos+1
    console.log('el numero ingresado sigue siendo menor')
    numeroIncognita=prompt('ingresa numero mayor')
}if (numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita<numeroIngresado){
    console.log ('numero sigue sigue siendo menor, has perdido')
    intentos=intentos+1
}else if(numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita>numeroIngresado){
    console.log('el numero es mayor')
    intentos=intentos+1
    numeroIncognita=prompt('ingresa un numero menor')
} if(numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita>numeroIngresado){
    console.log('numero sigue siendo mayor, te queda una oportunidad')
    
    intentos=intentos+1
    numeroIncognita=prompt('ingresa numero menor')
    console.log(intentos)
}if(numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita<numeroIngresado){
console.log('el numero es ahora menor')
numeroIncognita=prompt('ingresa un numero mayor ')
    intentos=intentos+1
}
if(numeroIncognita>=1 & numeroIncognita<=10 & intentos<3&numeroIncognita==numeroIngresado){
    console.log(`has ganado el numero a adivinar era ${numeroIngresado}`)
    
}else{
    console.log(` perdiste maximo de intentos permitidos o numero fuera del rango, el numero era ${numeroIngresado}`)
   
}
//9. ingresar edad y clasificarlo

let edad= parseInt(prompt('ingresa tu edad'))

if (edad<=12& edad>0){
    console.log('eres un infante')
}else if(edad>12 & edad<=18){
    console.log('eres un adolescente')
} else if(edad>=19 & edad<=45){
    console.log('eres un mayor joven')
}else if (edad>45 & edad <=100){
    console.log('eres un anciano')
}else if (edad>100){
    console.log(`En realidad tienes ${edad} años`)
}else{
    console.log('error del sistema')
}
//10. piedra, papel, tijera

let player1= prompt(' player 1 piedra, papel o tijera')
let player2= prompt(' player 2 piedra, papel o tijera')

if (player1=='piedra'& player2=='tijera'|| player1=='papel'& player2=='piedra'|| player1=='tijera'& player2=='papel'){

console.log('Ganador player 1')

}
else if ( player1=='piedra'& player2=='piedra'|| player1=='papel'& player2=='papel'|| player1=='tijera'& person2=='tijera'){
    console.log('empate')
}else if (player2=='piedra'& player1=='tijera'|| player2=='papel'& player1=='piedra'|| player2=='tijera'& player1=='papel'){
    console.log('ganador player 2')
}else{
    console.log('uno de los jugadores hizo trampa')
}

//11. ingreso de color con switch

let color=prompt('ingresa color')

switch(color){

    case 'blanco' || 'negro':
        console.log('falta color') 
        break;
    case 'verder':
        console.log('El color de la naturaleza')
        break;
    case 'azul':
        console.log('El color del agua')
        break;
    case 'amarillo':
        console.log('El color del sol')
        break;
    case 'rojo':
        console.log('El color del fuego')
        break;
    case 'marron':
        console.log('El color de la tierra')
        break;
    default:
        console.log('Excelente eleción, no lo teníamos pensado')
        break;
}

//12. ingreso de dos numeros y hacer operacion escogida 

let numeroA = parseInt(prompt('ingrese primer numero'))
let numeroB = parseInt(prompt('Ingrese segundo numero')) 
let operacion= prompt('ingrese operacion (suma, resta, multiplicacion, division)')

switch(operacion){
    case 'suma':
       console.log(`La operacion escogida fue suma y el resultado es ${numeroA+numeroB}`)
       break;
    case 'resta':
        console.log(`La operacion escogida es resta y el resultado es ${numeroA-numeroB}`)
        break;
    case 'multiplicacion':
        console.log(`La operacion escogida es multiplicacion y el resultado es ${numeroA*numeroB}`)
        break;
    case 'division' :
        if(numeroB>0){
            console.log(`La operacion escogida es division y el resultado es ${numeroA/numeroB}`)
        } else{
            console.log('el divisior no puede ser cero')
        }
        
        break;
    default:
        console.log('error')
}

//13. datos de C.C e imprimir todos los datos

let datosIngresados= {}
datosIngresados.id=parseFloat(prompt('ingrese numero de documento'))
datosIngresados.nombre=prompt('ingrese su nombre completo')
datosIngresados.edad=parseInt(prompt('ingrese su edad'))
datosIngresados.ciudad=prompt('ciudad de nacimiento')
datosIngresados.fecha=prompt('ingrese fecha de nacimiento (dd/mm/aa)')
console.table(datosIngresados)
let confirmar=prompt('los datos en la tabla son correctos (S/N)')
let dni={}
if (confirmar=='S'){
    dni=datosIngresados
    console.table(dni) 
    console.log(`El registro ha sido exitoso ${dni.nombre}`)
}else{
    console.log('vuelva a intentar en un mes')
}