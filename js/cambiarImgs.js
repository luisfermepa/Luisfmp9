var carpetaImgs = "/img/SS";
var pagina = 1;
var listaImgs=document.getElementById('listaImgs');
var nodosImg = listaImgs.childNodes;

window.onload = function (){
    mostrarImgsPorPrioridad(3);
};

function mostrarImgs(val){
    mostrarImgsPorPrioridad(val);
}

function mostrarImgsPorPrioridad(prioridad_){
    document.getElementById("Btn2").className = "active blue";
    document.getElementById("Btn1").className = "waves-effect";
    document.getElementById("BtnIzquierda").className = "waves-effect";

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'json/infoImg.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            let datos =  JSON.parse(this.responseText);
            let res = document.querySelector('#listaImgs');
            res.innerHTML='';
            let htmlTxt= '';
            let fila1 = true;
            let c=0;
            for(let item of datos){
                if(item.prioridad==prioridad_ && c<10){
                    c++;
                    if(fila1==true){
                        htmlTxt += `
                        <div class="row">
                            <img class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">`
                    } else{
                        htmlTxt += `
                            <img class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">
                        </div>`
                        res.innerHTML+=htmlTxt;
                        htmlTxt='';
                    }
                    fila1=!fila1;
                }
            }
        }
    }
}