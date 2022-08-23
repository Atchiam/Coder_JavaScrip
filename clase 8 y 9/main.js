class User {

    constructor(nombre,apellido,email, tel, comida){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
        this.tel      = Number(tel)
        this.comida   = comida
    }
}

const personas = []
let usuario= new User("milanga","cakero","kakyro@hotmai.com",1122333,"milanesa")
personas.push (usuario)

function datos(){
    let nombre   = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email    = document.getElementById("email").value
    let tel      = Number(document.getElementById("tel").value)
    let comida   = document.getElementById("comida").value

    alert (nombre + apellido + email + tel + comida)

    let per= new User(nombre, apellido, email, tel, comida)
    
    personas.push(per);

}

function ver(){

    let p = document.createElement('p')

    p.innerHTML = personas.map(e=> "usuario " + e.nombre +" "+ e.apellido)
    
    document.body.append(p)
}

console.log(personas.length)

btn= document.getElementById("enviar")
btn.onclick = () => {datos()}

btn2= document.getElementById("mostrar")
btn2.onclick = () => {ver()}




