const boton=document.getElementById("btn");
boton.addEventListener("click", bienvenida);
function bienvenida(){
    const nombre=document.getElementById("nombre").value;
    const imprimir=document.getElementById("etiqueta");
    mensaje="Bienvenido!";
    imprimir.innerText=mensaje;
    
}
