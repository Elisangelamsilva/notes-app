var app = new Vue({
    el: '#app',
    data: {
        notaTexto: "",
        notaIndex: null,
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
        },
        atualizar: function() {
            let notas = window.localStorage.getItem("notas");
            notas = JSON.parse(notas);
        
            this.notas[this.notaIndex].nota = this.notaTexto;
            notas[this.notaIndex].nota = this.notaTexto;
        
            window.localStorage.setItem("notas", JSON.stringify(notas));

            this.limpar();
        },
        selecionar: function(e) {
            this.notaIndex = this.notas.findIndex(function(nota){
                return nota.id == e.target.dataset.notaId;
            });

            this.notaTexto = this.notas[this.notaIndex].nota;
        },
        deletar: function() {
            let notas = window.localStorage.getItem("notas");
            notas = JSON.parse(notas);
        
            notas.splice(this.notaIndex, 1);
            this.notas.splice(this.notaIndex, 1);

            window.localStorage.setItem("notas", JSON.stringify(notas));
        
            this.limpar();
            
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
