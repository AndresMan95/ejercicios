
let arrayNotas=[{
    id:1,
    titulo:'sacar la basura',
    texto: 'mi mama me va a retar si no lo hago',
    realizada:false
},
{
    id:2,
    titulo:'lavar los platos',
    texto:'no podre cocinar con la loza sucia',
    realizada:false
},
{
    id:3,
    titulo:'cocinar',
    texto:'me toca hacer el almuerzo',
    realizada:true
}]





function pintarTarjetas(arregloPintar,divPadre){
    divPadre.innerHTML=""
    if (arrayNotas.length==0){
        divPadre.innerHTML='<h2>No hay notas para mostrar</h2>'
    }else{
    for (let i = 0; i < arregloPintar.length; i++) {
        crearNota(divPadre,arregloPintar[i])
       
    }
}
}
let padreNota=document.querySelector('.contenedor')
pintarTarjetas(arrayNotas,padreNota)


function crearNota(padreNotas, objeto){

    let contene=document.createElement('div')
    contene.classList.add('div')
    contene.innerHTML=`<div id='${objeto.id}' class="card text-bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">
        
        <input onClick="marcarRealizada(${objeto.id})" class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" ${objeto.realizada? "checked": ""} >
        <label for="cabeza" id="cabeza">${objeto.titulo}</label>
    </div>
    
    <div class="card-body">  
    ${objeto.realizada? `<p id="cuerpo" class="card-text"><del> ${objeto.texto}</del> </p>`: `<p id="cuerpo" class="card-text">${objeto.texto}</p>`}
      <button id="borrarNota" onClick='eliminarNota(${objeto.id})' class="btn btn-primary">Borrar Nota</button>
    </div>
  </div>`
    padreNotas.appendChild(contene)
    
}

let agregarNota=document.getElementById("save")
agregarNota.addEventListener("click",function(){
    if (titulo.value==""|| nota.value==""){
        alert('Uno de los campos esta vacío!')
    } else{  
        let idNuevo=arrayNotas.length+1
        let nuevaNota={
            id:idNuevo,
            titulo:titulo.value,
            texto:nota.value,
            realizada:false
        }
        arrayNotas.push(nuevaNota)
        pintarTarjetas(arrayNotas, padreNota)
        titulo.value=''
        nota.value=''
    }
    console.log(arrayNotas);
    
}) 



let borrar=document.getElementById("borrar")
borrar.addEventListener("click", function(){
    console.log('borrar');
    titulo.value=""
    nota.value= ""
})




function eliminarNota(id){
    for (let i = 0; i < arrayNotas.length; i++) {
        if(arrayNotas[i].id===id){
            arrayNotas.splice(i,1)
        }
        
    }
    pintarTarjetas(arrayNotas,padreNota)

}
function marcarRealizada(id){
let filtro = document.getElementById('id')
console.log(filtro);

for (let i=0; i<arrayNotas.length;i++){
    if(arrayNotas[i].id==id){
        if(arrayNotas[i].realizada){
            arrayNotas[i].realizada=false;
            
        }else {
            arrayNotas[i].realizada=true
            
        }
    }
}

pintarTarjetas(arrayNotas,padreNota)
}
/* let realizada = document.getElementById("flexSwitchCheckDefault")
realizada.addEventListener("click",function(){
    let filter=arrayNotas.filter(nota=>nota.realizada==true)
    pintarTarjetas(filter,padreNota)
    
}
    
) */

function aplicarFiltros() {
    let textoBusqueda = document.getElementById('buscar').value.toLowerCase();
    let realizadas = document.getElementById("flexSwitchCheckDefault").checked;

    let notasFiltradas = arrayNotas.filter(nota => {
        let coincideTexto = nota.titulo.toLowerCase().includes(textoBusqueda);
        let coincideRealizada = !realizadas || nota.realizada; // Si no se requiere "realizada", todas coinciden
        return coincideTexto && coincideRealizada;
    });

    pintarTarjetas(notasFiltradas, padreNota);
}

let realizada = document.getElementById("flexSwitchCheckDefault");
realizada.addEventListener("click", aplicarFiltros);

let buscar = document.getElementById('buscar');
buscar.addEventListener('input', aplicarFiltros);

