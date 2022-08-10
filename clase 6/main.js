
class Alumno {

    constructor(nombre,apellido,nota1, nota2, nota3){
        this.nombre   = nombre
        this.apellido = apellido
        this.nota1    = Number(nota1)
        this.nota2    = Number(nota2)
        this.nota3    = Number(nota3)
    }
}

function promedio(nota1,nota2,nota3){return ((nota1+nota2+nota3)/3)}

const alumnos = []

let cant = prompt("¿cuantos alumnos queres ingresar?")

for (let index = 0; index < cant; index++) {

    let nombre    = prompt("ingresa el nombre de tu alumno")
    let apellido  = prompt("ingresa el apellido de tu alumno")
    let nota1     = prompt("cual fue la 1° nota")
    let nota2     = prompt("cual fue la 2° nota")
    let nota3     = prompt("cual fue la 3° nota")

    alumnos.push(new Alumno(nombre,apellido,nota1,nota2,nota3))
    
    a = confirm("te gustaria saber el promedio?")

    if (a == true){
        x = alumnos[index]
        alert("El promedio de "+ x.nombre + " " + x.apellido + " es de " + promedio(x.nota1,x.nota2,x.nota3))
        
    }
}

console.log(alumnos)

