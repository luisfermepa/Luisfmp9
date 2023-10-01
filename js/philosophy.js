const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

const elemento = document.getElementById('objetivos');

if (elemento) {
    elemento.innerHTML = `My ${añoActual}'s goals`;
} else {
    console.error("El elemento con el ID especificado no fue encontrado.");
}