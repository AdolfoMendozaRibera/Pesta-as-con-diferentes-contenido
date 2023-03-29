//Seleccionamos todos los botones que estan dentro de "tags"
const tags=document.getElementById("tags");
const parrafo=document.getElementById("descripcion_parrafo");

//Selecciona los botones dentro de "tags"
const boton_history=document.getElementById("boton_history");
const boton_vision=document.getElementById("boton_vision");
const boton_goals=document.getElementById("boton_goals");

//Les añade un "data-descripcion" a cada etiqueta boton
boton_history.dataset.descripcion="Aqui la historia que quieras contar";
boton_vision.dataset.descripcion="Aqui va la vision que tu deseas escribir";
boton_goals.dataset.descripcion="Aqui el goals que quieras poner";

//Si se clickea en cualquier boton dentro de tags
tags.addEventListener("click",(event)=>
{
    //Si donde diste clisk es un elemento "boton"
    if (event.target.tagName==="BUTTON")
    {
        //Descripcion tendra el contenido "data-descripcion" que tenia el boton que diste "click"
        const descripcion=event.target.getAttribute("data-descripcion");
        //Si descripcion tiene algun valor, que no esta vacio
        if(descripcion)
        {
            //El "data-descripcion que tenia el boton" se imprime en la pagina en la seccion parrafo
            parrafo.textContent=`${descripcion}`;
        }
    }
})

