var pagina = 1;

function cambiarImg(){
    var img = document.getElementById("recon1");
    
    if(pagina==1){
        img.src="img/SS/recon11.png";
        pagina=2;
    } else{
        img.src="img/SS/recon1.png";
        pagina=1;
    }
    img.src = "img/SS/recon11.png";
}

function irAPagina(numPagina){
    ;
}