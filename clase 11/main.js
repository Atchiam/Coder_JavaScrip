//Clase
class User {
    constructor(nombre,apellido,email, tel, comida){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
        this.tel      = Number(tel)
        this.comida   = comida
    }
}

//verificacion en el local storage si hay o no datos
let personas = localStorage.getItem("personas") ?  JSON.parse(localStorage.getItem("personas")) : []

//obtencion de datos y armado de la base de datos
function datos(e){
    e.preventDefault();

    let nombre   = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email    = document.getElementById("email").value
    let tel      = Number(document.getElementById("tel").value)
    let comida   = document.getElementById("comida").value

//Alerta
    swal({
        title:`Guardado con Exito`, 
        icon: "success"
});

    let per= new User(nombre, apellido, email, tel, comida)

    personas.push(per)

    enjson = JSON.stringify(personas)

    localStorage.setItem("personas", enjson)
}

//Mostrar en el DOM
function ver(){
    let div = document.getElementById('lista');
    div.innerHTML = ''

    for (let i = 0; i < personas.length ; i++) {
        const e = personas[i];
        div.innerHTML += `<p>usuario ${e.nombre} ${e.apellido} e-mail ${e.email} telefono ${e.tel} comida a eleccion ${e.comida}</p>`
    }

    document.body.append(div)
}

//Borrar Cache
function borrarCache(){
    let borrar = swal({
        title:`Seguro que quiere borrar la cache?`, 
        icon: "info",
        buttons: {cancelar:{value:"cancelar"}, aceptar:{value:"aceptar"}},
    });
    borrar.then((value) => {
        switch (value) {

        case "aceptar":
            localStorage.clear()
            swal("Se elimino la Cache","","success");
            break;

        case "cancelar":
            swal("No se elimino la Cache", "", "error");
            break;
        }
    });
}

//Botones 
let btn= document.getElementById("enviar")
btn.addEventListener('click',datos)

let btn2= document.getElementById("mostrar")
btn2.onclick = () => {ver()}

let btn3= document.getElementById("borrarCache")
btn3.onclick = () => {borrarCache()}

//-------------------------------------------------------------------------------------------
//Ej de clase 12: Desestructuracion Con Alias y Spread

const gato = {
    tamano : "pequeño",
    color  : "rayado",
    pelo   : "corto",
}

const {tamano:tamaño, color, pelo:pelaje} = gato

console.log(tamaño, color, pelaje)

const gato2 = {
    ...gato,
    pelo : "carey",
    patas : 4, 
}

console.log(gato2, gato2.tamano)

console.log(gato)

console.log( null || undefined ) 