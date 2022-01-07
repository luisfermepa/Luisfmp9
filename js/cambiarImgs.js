var carpetaImgs = "/img/SS";
var pagina = 1;
var imgs =[][int];
var listaImgs=document.getElementById('listaImgs');
var nodosImg = listaImgs.childNodes;

for(var i=0; i<10; i++){
    imgs[0][i]=document.getElementById('img'+i);;
}

function cambiarImg(){
    var img = document.getElementById("img1");

    if(pagina==1){
        img.src=carpetaImgs+"/recon11.png";
        pagina=2;
    } else{
        img.src=carpetaImgs+"/recon1.png";
        pagina=1;
    }
    img.src = carpetaImgs+"/recon11.png";
}

function irAPagina(numPagina){
    //Guardar imgs actuales
    for(var i=0; i<nodosImg.length();i++){
        if(!nodosImg[i].hasChildNodes()){
            imgs[i]=nodosImg[i];
        }
    }
}

