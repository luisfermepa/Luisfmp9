var carpetaImgs = "/img/SS";
var pagina = 1;
var listaImgs=document.getElementById('listaImgs');
var nodosImg = listaImgs.childNodes;

function mostrarImgs(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'json/infoImg.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            let datos =  JSON.parse(this.responseText);
            let res = document.querySelector('#listaImgs');
            res.innerHTML='';

            for(let item of datos){
                res.innerHTML += `
                <div class="row">
                    <img id="img1" class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">
                    <img id="img2" class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">
                </div>`
            }
        }
    }
}

/*
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
}*/