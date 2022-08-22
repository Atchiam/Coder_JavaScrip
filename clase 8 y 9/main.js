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

function datos(){
    let nombre   = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email    = document.getElementById("email").value
    let tel      = Number(document.getElementById("tel").value)
    let comida   = document.getElementById("comida").value

    alert (nombre + apellido + email + tel + comida)

    return (personas.push(new User(nombre, apellido, email, tel, comida)));
}

function ver(){

    let p = document.createElement('p')

    p.innerHTML = personas.map(e=> "usuario " + e.nombre +" "+ e.apellido)
    
    document.body.append(p)
    // -----
    for (const e of personas) {
        let li= e.map(e=> "usuario " + e.nombre +" "+ e.apellido)
        
        li.innerHTML = e
        
        document.body.append(li)
    }

    p.innerHTML = "Lo muestra pero deveria traer los datos ingresados"
}

console.log(personas)

btn= document.getElementById("enviar")
btn.onclick = () => {datos()}

btn2= document.getElementById("mostrar")
btn2.onclick = () => {ver()}




