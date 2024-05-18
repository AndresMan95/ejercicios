



let calcular= document.getElementById("calcular")

calcular.addEventListener("click",function(){
    let estatura = document.getElementById("estatura").value
    let peso= document.getElementById("peso").value
    let resultado= peso/(Math.pow(estatura/100,2 ))

    document.getElementById("resultado").value=resultado.toFixed(1)
    console.log(resultado.toFixed(1))
})

let intercambio=document.getElementById("monedaOne")

let divisa=document.getElementById("divisa")


divisa.addEventListener("change",function(event){
    let option=event.target.value
    if(option==="argentino"){
        resultado= intercambio.value/880.75
        document.getElementById("dolar").value=resultado.toFixed(2)
    }else if (option=="colombiano"){
    resultado= intercambio.value/3885.81
    document.getElementById("dolar").value=resultado.toFixed(2)
}
})










