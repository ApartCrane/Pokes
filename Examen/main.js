datos();
var datos = [];

//Ejemplo
datos.push({
    "nombre":"Diego",
    "apellido1":"Fernández",
    "apellido2":"García",
    "pokemon":"Mudkip"
});


function alta() {
    let name = document.getElementById("name").value;
    let apellido = document.getElementById("apellido").value;
    let apellido2 = document.getElementById("apellido2").value;
    let pokemon = document.getElementById("pokemon").value;
    datos();
    console.log(datos = { nombre: nombre, apellido: apellido1, apellido2: apellido1, Pokemon: poke});
    limpiar();
}

function limpiar() {
    let name = document.getElementById("name").value = "";
    let apellido = document.getElementById("apellido").value = "";
    let apellido2 = document.getElementById("apellido2").value = "";
    let pokemon = document.getElementById("pokemon").value = "";
}

function actualizar(nombre){
    datos[i].nombre = document.getElementById("#name").value;
    datos[i].apellido = document.getElementById("#apellido").value;
    datos[i].apellidoDos = document.getElementById("#apellido2").value;
    datos[i].Pokemon = document.getElementById("#pokemon").value;
}

function delete() {
    let name = document.getElementById("name").value;
    let apellido = document.getElementById("apellido").value;
    let apellido2 = document.getElementById("apellido2").value;
    let pokemon = document.getElementById("pokemon").value;
    console.log(datos = { nombre: null, apellido: null, apellido2: null, Pokemon: null});
}