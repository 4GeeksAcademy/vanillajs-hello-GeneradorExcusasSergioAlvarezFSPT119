import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


boton.addEventListener("click", () => {
  let boton = document.getElementById("boton")
  let excusa = document.getElementById("excusa")
  
  let quien = ["El perro", "Michael Jackson","Patricia","El profe","Un amigo","Thanos"]
  let cuando = ["ayer","justo antes de vernos","esta mañana","anoche","en este preciso instante","cuando menos me lo esperaba"]
  let que = ["se ha caido por las escaleras","me ha suspendido el proyecto","los meniscos me duelen","el futuro es incierto","no tenia internet","me ha fulminado"]

  const generadorExcusa = () => {
    const quienAleatorio = quien[Math.floor(Math.random()* quien.length)]
    const cuandoAleatorio = cuando[Math.floor(Math.random()* cuando.length)]
    const queAleatorio = que[Math.floor(Math.random()* que.length)]
  
    return `${quienAleatorio} ${cuandoAleatorio} ${queAleatorio}`

    hola
  }
  excusa.textContent = generadorExcusa()
    
  const cambiarColorDeFondo = () => {
    const colores = ["blue","red","green","grey","beige"]
    return excusa.style.backgroundColor = colores[Math.floor(Math.random()* colores.length)]
  }
  cambiarColorDeFondo()
})