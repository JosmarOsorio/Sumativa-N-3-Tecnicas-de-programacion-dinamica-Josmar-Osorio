// Referencias a elementos del DOM
const botonAnterior = document.querySelector("#boton-anterior");
const botonSiguiente = document.querySelector("#boton-siguiente");
const libro = document.querySelector("#libro");

const hoja1 = document.querySelector("#h1");
const hoja2 = document.querySelector("#h2");
const hoja3 = document.querySelector("#h3");
const hoja4 = document.querySelector("#h4");
const hoja5 = document.querySelector("#h5");

// Listener de eventos
botonAnterior.addEventListener("click", irPaginaAnterior);
botonSiguiente.addEventListener("click", irPaginaSiguiente);

// Lógica de negocio
let ubicacionActual = 1;
let numDeHojas = 5; 
let maxUbicacion = numDeHojas + 1;

function abrirLibro() {
   libro.style.transform = "translateX(50%)";
   botonAnterior.style.transform = "translateX(-180px)";
   botonSiguiente.style.transform = "translateX(180px)";
}

function cerrarLibro(estaAlPrincipio) {
   if(estaAlPrincipio) {
       libro.style.transform = "translateX(0%)";
   } else {
       libro.style.transform = "translateX(100%)";
   }
   
   botonAnterior.style.transform = "translateX(0px)";
   botonSiguiente.style.transform = "translateX(0px)";
}

function irPaginaSiguiente() {
   if(ubicacionActual < maxUbicacion) {
       switch(ubicacionActual) {
           case 1:
               abrirLibro();
               hoja1.classList.add("girada");
               hoja1.style.zIndex = 1; 
               break; 
           case 2:
               hoja2.classList.add("girada");
               hoja2.style.zIndex = 2; 
               break; 
            case 3:
              hoja3.classList.add("girada");
              hoja3.style.zIndex = 3; 
            break;
            case 4:
               hoja4.classList.add("girada");
               hoja4.style.zIndex = 4; 
               break;
           case 5:
               hoja5.classList.add("girada");
               hoja5.style.zIndex = 5; 
               cerrarLibro(false); 
               break; 
           default:
               throw new Error("estado desconocido");
       }
       ubicacionActual++;
   }
}

function irPaginaAnterior() {
   if(ubicacionActual > 1) {
       switch(ubicacionActual) {
           case 2:
               cerrarLibro(true);
               hoja1.classList.remove("girada");
               hoja1.style.zIndex = 5; 
               break; 
           case 3:
               hoja2.classList.remove("girada");
               hoja2.style.zIndex = 4; 
               break; 
           case 4:
               abrirLibro();
               hoja3.classList.remove("girada");
               hoja3.style.zIndex = 3; 
               break;
            case 5:
              abrirLibro();
              hoja4.classList.remove("girada");
              hoja4.style.zIndex = 2; 
              break;
            case 6:
                abrirLibro();
                hoja5.classList.remove("girada");
                hoja5.style.zIndex = 1; 
                break;  
           default:
               throw new Error("estado desconocido");
       }

       ubicacionActual--;
   }
}