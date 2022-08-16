
class Alumno {

    constructor(nombre,apellido,nota1, nota2, nota3, promedio){
        this.nombre   = nombre
        this.apellido = apellido
        this.nota1    = Number(nota1)
        this.nota2    = Number(nota2)
        this.nota3    = Number(nota3)
        this.promedio = Number(promedio)
    }
}

function promediof(nota1,nota2,nota3){return ((nota1+nota2+nota3)/3)}

const alumnos = []

let cant = prompt("¿cuantos alumnos queres ingresar?")

for (let index = 0; index < cant; index++) {

    let nombre    = prompt("ingresa el nombre de tu alumno")
    let apellido  = prompt("ingresa el apellido de tu alumno")
    let nota1     = Number(prompt("cual fue la 1° nota"))
    let nota2     = Number(prompt("cual fue la 2° nota"))
    let nota3     = Number(prompt("cual fue la 3° nota"))
    let promedio  = promediof(nota1,nota2,nota3)

    alumnos.push(new Alumno(nombre,apellido,nota1,nota2,nota3,promedio))
}

console.log(alumnos)

let caso = prompt("Que te gustaria saber de los Alumnos \n 1. los aprobados \n 2. los desaprobados \n 3. todos \n 4. ninguno \n para seleccionar una opcion poner el numero de la izquierda")

switch (caso) {
    case "1":
        let aprobados = alumnos.filter((e) => e.promedio >= 7)
        alert("los alumnos aprobados son \n" + aprobados.map(e=> "Alumno " + e.nombre +" "+ e.apellido + " NOTA: " + e.promedio + "\n"))
        break;

    case "2":
        let desaprobados = alumnos.filter((e) => e.promedio < 7)
        alert("los alumnos aprobados son \n" + desaprobados.map(e=> "Alumno " + e.nombre +" "+ e.apellido + " NOTA: " + e.promedio + "\n"))
        break;

    case "3":
        alert (alumnos.map(e=> "Alumno " + e.nombre +" "+ e.apellido + " NOTA: " + e.promedio + "\n"))
        break;

    case "4":
        alert("gracias por usar esta funcion")

        break;

    default:
        break;
}

console.log(alumnos)

