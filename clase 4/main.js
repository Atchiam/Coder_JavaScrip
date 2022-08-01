
function promedio (a){
    while (a == true){
        let b = Number(prompt("¿cual es la primera nota del alumno?")); 
        let c = Number(prompt("¿cual es la segunda nota del alumno?")); 
        let d = Number(prompt("¿cual es la tercera nota del alumno?")); 

        let e = (b + c + d)/3; 

        alert ("El promedio de tu alumno es " + e); 

        if  (e >= 7){
            alert ("felicidades el alumno aprobo")
        }
        else{
            alert ("el alumno debe de recursar o hacer trabajos extras")
        }

        a =confirm("queres saver el promedio de otro alumno?");
    }

        alert("gracias por usar estya funcion"); 

}

let a = confirm("queres saver el promedio de tu alumno?")

promedio(a)