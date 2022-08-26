class User {

    constructor(nombre,apellido,email, tel, comida){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
        this.tel      = Number(tel)
        this.comida   = comida
    }
}

const personas=[]

personas.push (usuario)

function datos(e){
    e.preventDefault();

    let nombre   = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email    = document.getElementById("email").value
    let tel      = Number(document.getElementById("tel").value)
    let comida   = document.getElementById("comida").value

    alert ("se guardo con exito")

    let per= new User(nombre, apellido, email, tel, comida)
    
    personas.push(per);
}

function ver(){

    let div = document.createElement('div')

    for (let i = 0; i < personas.length; i++) {
        const e = personas[i];
        
        let p = document.createElement('p')
        p.innerHTML = "usuario " + e.nombre +" "+ e.apellido +"e-mail" +e.email +" "+ "telefono" + e.tel + " comida a eleccion "+ e.comida
    
        div.append(p)
    }
    document.body.append(div)
}

console.log(personas)

let btn= document.getElementById("enviar")
console.log(btn)
btn.addEventListener('click',datos)

btn2= document.getElementById("mostrar")
btn2.onclick = () => {ver()}




