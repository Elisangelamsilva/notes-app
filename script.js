var app = new Vue({
    el: '#app',
    data: {
        notaTexto: "",
        notas: []
    },
    methods: {
        adicionar: function() {
            let nota = {id: new Date().getTime(), nota: this.notaTexto}

            let notas = window.localStorage.getItem("notas");
            notas = JSON.parse(notas);
            notas.push(nota);
            window.localStorage.setItem("notas", JSON.stringify(notas));

            this.notas.push(nota);

            this.limpar();
        },
        limpar: function() {
            this.notaTexto = "";
            // text01.dataset.notaId = ''
            // text01.focus();
        }
    },
    created: function() {
        let notasString = window.localStorage.getItem("notas");
        if(notasString == null){
            notasString = "[]";
        }
        this.notas = JSON.parse(notasString);
    }
})

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

    limpar();
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

    limpar();
}

