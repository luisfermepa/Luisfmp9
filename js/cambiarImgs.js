/*Mejorar recorrido, si tendré 3 prioridades, debería asignar prioridad 3 a las 1ras páginas hasta que no existan
 elementos en el json con esa prioridad.
*/
let Btns=document.getElementById("Botones");
let listaBtns = Btns.childNodes;
let tamannoListaBtns=listaBtns.length;
let cantidadDatos;
//cantidadDatos=JSON.parse('json/infoImg.json');
//cambiar con cada salto de pagina
let pagActual;

window.onload = function (){
    pagActual=1;
    alert(tamannoListaBtns);
    mostrarImgsPorPagina(1);
    pag1=document.getElementById("Btn1").value;
    pag2=document.getElementById("Btn2").value;
    pag3=document.getElementById("Btn3").value;
};

document.getElementById("btnIzq").addEventListener("click", mostrarPaginaAnterior,false);
document.getElementById("Btn1").addEventListener("click", function(){mostrarPagina(pag1)}, false);
document.getElementById("Btn2").addEventListener("click", function(){mostrarPagina(pag2)}, false);
document.getElementById("Btn3").addEventListener("click", function(){mostrarPagina(pag3)}, false);
document.getElementById("btnDer").addEventListener("click", mostrarPaginaSiguiente,false);

function mostrarPagina(val){
    mostrarImgsPorPagina(val);
}

function mostrarImgsPorPagina(pagina){
    
    if(Btns.hasChildNodes()){

        var prioridadPag;
        prioridadPag=4-pagina;
    
        var i=tamannoListaBtns-1;
        for (; i >= 0; i--) {
            if(listaBtns[i].value==pagina){
                listaBtns[i].className = "active blue";
            } else {
                listaBtns[i].className= "waves-effect";
            }
            if(pagina==1){
                document.getElementById("BtnIzquierda").className = "disabled";
                document.getElementById("BtnDerecha").className = "waves-effect";
            } else {
                if(pagina<tamannoListaBtns-2){
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
            let cantidadPrioridad1, cantidadPrioridad2, cantidadPrioridad3;
            cantidadPrioridad1=0;
            cantidadPrioridad2=0;
            cantidadPrioridad3=0;
            for(let items of datos){
                if(items.prioridad==3){
                    cantidadPrioridad3++;
                } else if(items.prioridad==2){
                    cantidadPrioridad2++;
                } else if(items.prioridad==1){
                    cantidadPrioridad1++;
                }
            }
            for(let item of datos){
                if(item.prioridad==prioridadPag && c<10){
                    c++;
                    if(fila1==true && (c==10 || datos[datos.length-1]==item || (c==cantidadPrioridad3 && prioridadPag==3) || (c==cantidadPrioridad2 && prioridadPag==2) || (c==cantidadPrioridad1 && prioridadPag==1))){
                        htmlTxt += `
                        <div class="row">
                            <img class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">
                        </div>
                        `
                        res.innerHTML+=htmlTxt;
                        htmlTxt='';
                    } else if (fila1==true){
                        htmlTxt += `
                        <div class="row">
                            <img class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">
                        `
                    }
                    else{
                        htmlTxt += `
                            <img class="col s12 l6 responsive-img" src="${item.src}" alt="${item.alt}">
                        </div>
                        `
                        res.innerHTML+=htmlTxt;
                        htmlTxt='';
                    }
                    fila1=!fila1;
                }
            }
        }
    }
}

function mostrarPaginaSiguiente(){
    if(pagActual<tamannoListaBtns-2){
        mostrarImgsPorPagina(pagActual+1);
        pagActual++;
    }
}

function mostrarPaginaAnterior(){
    if(pagActual>1){
        mostrarImgsPorPagina(pagActual-1);
        pagActual--;
    }
}