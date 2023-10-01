const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

const elemento = document.getElementById('objetivos');

if (elemento) {
    elemento.innerHTML = `Objetivos ${añoActual}`;
} else {
    console.error("El elemento con el ID especificado no fue encontrado.");
}