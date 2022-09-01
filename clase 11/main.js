class User {
    constructor(nombre,apellido,email, tel, comida){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
        this.tel      = Number(tel)
        this.comida   = comida
    }
}

localStorage.getItem("personas") ?  personas = JSON.parse(localStorage.getItem("personas")) : personas = []

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

function ver(){

    let borrar = document.getElementsByTagName("div") 
    borrar.remove()

    let div = document.createElement('div');

    for (let i = 0; i < personas.length ; i++) {
        const e = personas[i];
        
        div.innerHTML += `<p>usuario ${e.nombre} ${e.apellido} e-mail ${e.email} telefono ${e.tel} comida a eleccion ${e.comida}</p>`
    }

    document.body.append(div)
}

function borrarCache(){
    localStorage.clear()
}

//console.log(personas)

let btn= document.getElementById("enviar")
btn.addEventListener('click',datos)

let btn2= document.getElementById("mostrar")
btn2.onclick = () => {ver()}

let btn3= document.getElementById("borrarCache")
btn3.onclick = () => {borrarCache()}


