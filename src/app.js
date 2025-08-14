import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let boton = document.getElementById("boton")
let textoExcusa = document.getElementById("textoExcusa")

let quien = ["El perro", "Michael Jackson","Patricia","El profe","Un amigo","Thanos"]
let cuando = ["ayer","justo antes de vernos","esta mañana","anoche","en este preciso instante","cuando menos me lo esperaba"]
let que = ["se ha caido por las escaleras","me ha suspendido el proyecto","los meniscos me duelen","el futuro es incierto","no tenia internet","me ha fulminado"]



const generadorExcusa = (array) => {
  let excusa = array[Math.floor(Math.random()* array.length)]
  return excusa
}  


const cambiarColorDeFondo = () => {
  const colores = ["blue","red","green","grey","beige"]
  return textoExcusa.style.backgroundColor = colores[Math.floor(Math.random()* colores.length)]
}  


boton.addEventListener("click", () => {
  textoExcusa.textContent = `${generadorExcusa(quien)} ${generadorExcusa(cuando)} ${generadorExcusa(que)}`
  cambiarColorDeFondo()
})