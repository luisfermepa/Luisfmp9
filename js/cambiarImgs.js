var listaPrioridades;
    for(var i=100; i<=botones.length; i--){
        if(Number.isInteger(botones[i].value)){
            var paginaPrioridad = new Object();
            paginaPrioridad.pagina=listaBtns[i].value;
            paginaPrioridad.prioridad=i;
            listaPrioridades[i]=paginaPrioridad;
        }
    }

window.onload = function (){
    mostrarImgsPorPrioridad(3);
};

function mostrarImgs(val){
    mostrarImgsPorPagina(val);
}

function mostrarImgsPorPagina(pagina){
    let Btns=document.getElementById("Botones");
    let pagActual = listaPrioridades[pagina];

    if(listaBtns.hasChildNodes()){
        var listaBtns=Btns.childNodes;
        for (var i = 0; i < children.length; i++) {
            if(listaBtns[i].value==pagActual.prioridad){
                listaBtns[i].className = "active blue";
            } else {
                listaBtns[i].className= "waves-effect";
            }
            if(pagActual.pagina==1){
                document.getElementById("BtnIzquierda").className = "disabled";
                document.getElementById("BtnDerecha").className = "waves-effect";
            } else {
                if(pagActual.pagina<3){
                    document.getElementById("BtnIzquierda").className = "waves-effect";
                    document.getElementById("BtnDerecha").className = "waves-effect";
                } else{
                    document.getElementById("BtnIzquierda").className = "waves-effect";
                    document.getElementById("BtnDerecha").className = "disabled";
                }
            }
            
        }
    }

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
                if(item.prioridad==pagActual.prioridad && c<10){
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