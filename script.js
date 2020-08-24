window.onload = function(){
    let notas = window.localStorage.getItem("notas");
    if(notas == null){
        notas = "[]";
    }
    notas = JSON.parse(notas);

    exibirListaNotas(notas);
}

function createDiv(nota){
    let direita = document.querySelector(".direita");

    let addNotas = document.createElement("div");
    addNotas.innerHTML = `${nota.nota}`
    direita.appendChild(addNotas);

    addNotas.addEventListener('click', function(){
        let text01 = document.getElementById("text01");
        text01.value = nota.nota;
        text01.dataset.notaId = nota.id;
    });
}

function exibirListaNotas(notas){
    for(let nota of notas){
        createDiv(nota);
    }
}

function buscarIndexDeNota(notas){
    return notas.findIndex(function(nota){
        return nota.id == text01.dataset.notaId;
    });
}

function atualizar(){
    let text01 = document.getElementById("text01");
    let direita = document.querySelector(".direita");
    
    let notas = window.localStorage.getItem("notas");
    notas = JSON.parse(notas);

    let notaIndex = buscarIndexDeNota(notas);

    notas[notaIndex].nota = text01.value;

    window.localStorage.setItem("notas", JSON.stringify(notas));

    direita.innerHTML = ``;
    exibirListaNotas(notas);
}

function adicionar(){
    let text01 = document.getElementById("text01").value;

    let nota = {id: new Date().getTime(), nota: text01}

    let notas = window.localStorage.getItem("notas");
    notas = JSON.parse(notas);
    notas.push(nota);
    window.localStorage.setItem("notas", JSON.stringify(notas));

    createDiv(nota);
}

function deletar(){
    let direita = document.querySelector(".direita");
    let notas = window.localStorage.getItem("notas");
    notas = JSON.parse(notas);

    let notaIndex = buscarIndexDeNota(notas);

    notas.splice(notaIndex, 1);

    window.localStorage.setItem("notas", JSON.stringify(notas));
    direita.innerHTML = ``;
    exibirListaNotas(notas);
}