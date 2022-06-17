const btnEnvio = document.getElementById('btnEnviar');

btnEnvio.addEventListener('click', function(e){
    e.preventDefault();
    const nombres =document.getElementById('nombres').value;
    const apellidos=document.getElementById('apellidos').value;
    const nombresCompletos=nombres+" "+apellidos;
    const email=document.getElementById('email').value;
    const asuntoDesarrolloWeb=document.getElementById('checkWeb').value;
    const asuntoVideojuegos=document.getElementById('checkVideojuegos').value;
    const asuntoTecnologia=document.getElementById('checkTec').value;
    const asuntoGestion=document.getElementById('checkGestion').value;
    const asuntosOtros=document.getElementById('otrosAsuntos').value;
    const asuntoCompleto=asuntoDesarrolloWeb+asuntoVideojuegos+asuntoTecnologia+asuntoGestion+asuntosOtros;
    const mensaje=document.getElementById('mensaje').value;

    window.location.href=`mailto:luisfermepa9@gmail.com?
    subject=${asuntoCompleto}&body=Nombre%3A%20${nombresCompletos}.%0ACorreo%3A%20${email}%0AMensaje%3A%20${mensaje}`;
});