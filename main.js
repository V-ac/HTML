//creo una funcion que se ejecutara cuando hago click en el boton
function muestra_oculta(id, button) {
    //declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
   
    let div = document.getElementById(id);
    let boton = document.getElementById(button);
    //uso el condicional IF para saber si el DIV esta oculto (Display: none) o si esta visible 
    if (div.style.display == "none"){ 
      div.style.display = "flex";
      boton.innerHTML ="Ver menos"
    } 
    else {
      div.style.display = "none";
      boton.innerHTML ="Ver más";
    }
}
