// Referencias a elementos del DOM
const botonAnterior = document.querySelector("#boton-anterior"); // Selecciona el botón para ir a la página anterior
const botonSiguiente = document.querySelector("#boton-siguiente"); // Selecciona el botón para ir a la página siguiente
const libro = document.querySelector("#libro"); // Selecciona el contenedor del libro

// Selección de las hojas del libro por su ID
const hoja1 = document.querySelector("#h1"); // Selecciona la primera hoja
const hoja2 = document.querySelector("#h2"); // Selecciona la segunda hoja
const hoja3 = document.querySelector("#h3"); // Selecciona la tercera hoja
const hoja4 = document.querySelector("#h4"); // Selecciona la cuarta hoja
const hoja5 = document.querySelector("#h5"); // Selecciona la quinta hoja

// Listener de eventos para los botones
botonAnterior.addEventListener("click", irPaginaAnterior); // Añade un evento al botón anterior que llama a la función irPaginaAnterior al hacer clic
botonSiguiente.addEventListener("click", irPaginaSiguiente); // Añade un evento al botón siguiente que llama a la función irPaginaSiguiente al hacer clic

// Lógica de negocio
let ubicacionActual = 1; // Variable que rastrea la ubicación actual en el libro (página)
let numDeHojas = 5; // Número total de hojas en el libro
let maxUbicacion = numDeHojas + 1; // Calcula la ubicación máxima permitida (una más que el número de hojas)

function abrirLibro() {
    libro.style.transform = "translateX(50%)"; // Mueve el libro hacia la derecha al abrirlo (50% de su ancho)
    botonAnterior.style.transform = "translateX(-180px)"; // Mueve el botón anterior hacia la izquierda
    botonSiguiente.style.transform = "translateX(180px)"; // Mueve el botón siguiente hacia la derecha
}

function cerrarLibro(estaAlPrincipio) {
    if (estaAlPrincipio) {
        libro.style.transform = "translateX(0%)"; // Si está al principio, vuelve a la posición original del libro
    } else {
        libro.style.transform = "translateX(100%)"; // Si no está al principio, mueve el libro completamente fuera de vista (100%)
    }

    botonAnterior.style.transform = "translateX(0px)"; // Restaura la posición del botón anterior a su lugar original
    botonSiguiente.style.transform = "translateX(0px)"; // Restaura la posición del botón siguiente a su lugar original
}

// Función para ir a la siguiente página del libro
function irPaginaSiguiente() {
    // Verifica si la ubicación actual es menor que la máxima permitida
    if (ubicacionActual < maxUbicacion) {
        // Utiliza un switch para manejar la lógica de navegación según la ubicación actual
        switch (ubicacionActual) {
            case 1:
                abrirLibro(); // Abre el libro al ir a la segunda página
                hoja1.classList.add("girada"); // Agrega la clase "girada" a la primera hoja para aplicar efectos de giro
                hoja1.style.zIndex = 1; // Establece el z-index para asegurar que esta hoja esté en la parte superior
                break;
            case 2:
                hoja2.classList.add("girada"); // Gira la segunda hoja
                hoja2.style.zIndex = 2; // Ajusta el z-index de la segunda hoja
                break;
            case 3:
                hoja3.classList.add("girada"); // Gira la tercera hoja
                hoja3.style.zIndex = 3; // Ajusta el z-index de la tercera hoja
                break;
            case 4:
                hoja4.classList.add("girada"); // Gira la cuarta hoja
                hoja4.style.zIndex = 4; // Ajusta el z-index de la cuarta hoja
                break;
            case 5:
                hoja5.classList.add("girada"); // Gira la quinta hoja
                hoja5.style.zIndex = 5; // Ajusta el z-index de la quinta hoja
                cerrarLibro(false); // Cierra el libro al llegar a la última página
                break;
            default:
                throw new Error("estado desconocido"); // Lanza un error si se encuentra un estado desconocido
        }
        ubicacionActual++; // Incrementa la ubicación actual para reflejar que se ha pasado a la siguiente página
    }
}

// Función para ir a la página anterior del libro
function irPaginaAnterior() {
    // Verifica si la ubicación actual es mayor que 1 (no se puede ir a una página anterior si ya está en la primera)
    if (ubicacionActual > 1) {
        // Utiliza un switch para manejar la lógica de navegación según la ubicación actual
        switch (ubicacionActual) {
            case 2:
                cerrarLibro(true); // Cierra el libro al volver a la primera página
                hoja1.classList.remove("girada"); // Quita el efecto de giro de la primera hoja
                hoja1.style.zIndex = 5; // Restablece el z-index de la primera hoja para que esté en el fondo
                break;
            case 3:
                hoja2.classList.remove("girada"); // Quita el efecto de giro de la segunda hoja
                hoja2.style.zIndex = 4; // Ajusta el z-index de la segunda hoja al volver atrás
                break;
            case 4:
                abrirLibro(); // Abre el libro al volver a la tercera página
                hoja3.classList.remove("girada"); // Quita el efecto de giro de la tercera hoja
                hoja3.style.zIndex = 3; // Ajusta el z-index de la tercera hoja al volver atrás
                break;
            case 5:
                abrirLibro(); // Abre el libro al volver a la cuarta página
                hoja4.classList.remove("girada"); // Quita el efecto de giro de la cuarta hoja
                hoja4.style.zIndex = 2; // Ajusta el z-index de la cuarta hoja al volver atrás
                break;
            case 6:
                abrirLibro(); // Abre el libro al volver a la quinta página (si existiera)
                hoja5.classList.remove("girada"); // Quita el efecto de giro de la quinta hoja
                hoja5.style.zIndex = 1; // Ajusta el z-index de la quinta hoja al volver atrás
                break;
            default:
                throw new Error("estado desconocido"); // Lanza un error si se encuentra un estado desconocido
        }

        ubicacionActual--; // Decrementa la ubicación actual para reflejar que se ha vuelto a una página anterior
    }
}