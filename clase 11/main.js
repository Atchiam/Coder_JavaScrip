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
        buttons: {aceptar:{value:"aceptar"}, cancelar:{value:"cancelar"}},
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

//-------------------------------------------------------------------------------------------
//clase 14: Fetch Api 
//---------no anda-------
    // <li> abilidades:${
    //     data.abilities.forEach(element => {
    //         `${element.ability.name}`
    //     })}
    // </li>
//---------si anda-------
{/* <li>abilidad 1:  ${data.abilities[0].ability.name}</li>
<li>abilidad 2:  ${data.abilities[1].ability.name}</li> */}

let btn4 = document.getElementById("poke_btn")
btn4.onclick = () => {
    let pok= document.getElementById("poke_inp").value
    poki(`https://pokeapi.co/api/v2/pokemon/${pok}`)
}

function poki(url){
    fetch(url)
        .then((res) => res.json())
            .then((data) => {
                const div = document.getElementById("poke_div")
                const li = document.createElement('div')
                li.innerHTML=`
                <img src="${data.sprites.front_default}" style="width: 10rem; margin:1rem 4rem" class="card-img-top" alt="...">
                <div class="card-body" style="width: 15rem; margin:0rem 1.5rem">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">
                    <ul>
                        <li>abilidad 1:  ${data.abilities[0].ability.name}</li>
                        <li>abilidad 2:  ${data.abilities[1].ability.name}</li>
                    </ul>
                    </p>
                </div>
                `
                div.append(li)
            })
    
        .catch(err => swal("No introduciste ningun Pokemon valido", `"${err}"`, "error"))
}

fetch (`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) =>res.json())
        .then((data) => 
        data.results.forEach((element) => {
            poki(element.url)
            }
    ))