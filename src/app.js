import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");

// }

let excusa = document.getElementById("excusa")
let boton = document.getElementById("boton")

let quien = ["El perro", "Michael Jackson","Patricia","El profe","Un amigo","Thanos"]
let cuando = ["ayer","justo antes de vernos","esta mañana","anoche","en este preciso instante","cuando menos me lo esperaba"]
let que = ["se ha caido por las escaleras","me ha suspendido el proyecto","los meniscos me duelen","el futuro es incierto","no tenia internet","me ha fulminado"]


const generadorExcusa = () => {
  const quienAleatorio = quien[Math.floor(Math.random()*6)]
  const cuandoAleatorio = cuando[Math.floor(Math.random()*6)]
  const queAleatorio = que[Math.floor(Math.random()*6)]

  return `${quienAleatorio} ${cuandoAleatorio} ${queAleatorio}`
} 

excusa.textContent = generadorExcusa()

boton.addEventListener("click", () => {
  const generadorExcusa = () => {
    const quienAleatorio = quien[Math.floor(Math.random()*6)]
    const cuandoAleatorio = cuando[Math.floor(Math.random()*6)]
    const queAleatorio = que[Math.floor(Math.random()*6)]
  
    return `${quienAleatorio} ${cuandoAleatorio} ${queAleatorio}`
  } 

  excusa.textContent = generadorExcusa()
})

