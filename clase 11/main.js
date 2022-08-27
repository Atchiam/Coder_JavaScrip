class User {
    constructor(nombre,apellido,email, tel, comida){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
        this.tel      = Number(tel)
        this.comida   = comida
    }
}

function datos(e){
    e.preventDefault();

    let nombre   = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email    = document.getElementById("email").value
    let tel      = Number(document.getElementById("tel").value)
    let comida   = document.getElementById("comida").value

    alert ("se guardo con exito")

    let per= new User(nombre, apellido, email, tel, comida)

    enjson = JSON.stringify(per)

    localStorage.setItem(0, enjson)
}

function ver(){

    let personas = JSON.parse(localStorage.getItem(0))
    let div = document.createElement('div')
    let p = document.createElement('p')

    for (let i = 0; i < 1; i++) {
        const e = personas;
        
        p.innerHTML = "usuario " + e.nombre +" "+ e.apellido +"e-mail" +e.email +" "+ "telefono" + e.tel + " comida a eleccion "+ e.comida
        
        div.append(p)
    }
    div.append(p)
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


