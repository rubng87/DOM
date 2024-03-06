// DOM

const parrafo1 = document.getElementById
("parrafo1").textContent

console.log(parrafo1);

document.querySelector("#parrafo2").textContent = 
"Soy un párrafo muy interesante"

document.querySelector("#parrafo3").innerText = 
"Soy un párrafo 3"

document.querySelector("#parrafo4").innerHTML = 
"<span onclick='textoColorRojo()'> Soy un <strong>párrafo</strong> muy interesante</span>"


function textoColorRojo() {
    document.querySelector("#parrafo4").style.color
    = "red"
    document.querySelector("#parrafo4").style.
    border = "2px solid blue"
    
}

// function textColorRojo() {
//     let estilo = document.querySelector("parrafo4")
//     estilo.style.color = "red"
//     estilo.style.border = "2px solid blue"
//     estilo.style.fontFamily = "Arial"
    
// }

// document.querySelector("#parrafo5").innerHTML = 
// "<span> Yo también soy un <strong>párrafo</strong> muy interesante</span>"

// document.querySelector("#parrafo5").onclick = cambiarEstilo


function cambiarEstilo() {
    document.querySelector("#parrafo5").classList.add("textoInteresante")
    document.querySelector("#parrafo1").classList.add("textoInteresante")
    
}

document.querySelector("#parrafo5").onclick = () => {  //lo importante de todo hasta ahora es como crear un function de flecha () =>
    document.querySelector("#parrafo5").classList.add("textoInteresante")
    document.querySelector("#parrafo1").classList.add("textoInteresante")
    
}

let array1 = ["Pep", "Maria"]
let array2 = ["Marta", "Joan"]

let miFunction = () => {
    alert("Hola")
}

// miFunction()

let arrayFinal = array1.concat(array2)
console.log(arrayFinal);

function cambiarEstilo() {
    document.querySelector("#parrafo5").classList.add("textoInteresante")
    document.querySelector("#parrafo1").classList.add("textoInteresante")
    
}

if(array1.length > 3) console.log("Hay muchos elementos");
else console.log("Hay pocos eementos")


