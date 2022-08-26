class User {
    constructor(nombre,apellido,email, tel, comida){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
        this.tel      = Number(tel)
        this.comida   = comida
    }
}
//const personas=[]
let id = Number(0)

function datos(e, id){
    e.preventDefault();

    let nombre   = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email    = document.getElementById("email").value
    let tel      = Number(document.getElementById("tel").value)
    let comida   = document.getElementById("comida").value

    alert ("se guardo con exito")

    let per= new User(nombre, apellido, email, tel, comida)

    enjson = JSON.stringify(per)

    localStorage.setItem(id, enjson)

}

function ver(){

    let personas = JSON.parse(localStorage.getItem(0))
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerHTML = "usuario " + personas.nombre +" "+ personas.apellido +"e-mail" +personas.email +" "+ "telefono" + personas.tel + " comida a eleccion "+ personas.comida

    // for (let i = 0; i < personas.length; i++) {
    //     const e = personas[i];
        
    //     let p = document.createElement('p')
    //     p.innerHTML = "usuario " + e.nombre +" "+ e.apellido +"e-mail" +e.email +" "+ "telefono" + e.tel + " comida a eleccion "+ e.comida
    
    //     div.append(p)
    // }
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


