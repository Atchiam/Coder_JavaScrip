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

    alert ("se guardo con exito")

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
    localStorage.clear()
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