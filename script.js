var app = new Vue({
    el: '.glass',
    data: {
        notaTexto: "",
        notaIndex: null,
        notas: []
    },
    methods: {
        adicionar: function() {
            let nota = {id: new Date().getTime(), nota: this.notaTexto}

            this.notas.push(nota);

            this.atualizarStorage();

            this.limpar();
        },
        limpar: function() {
            this.notaTexto = "";
        },
        atualizar: function() {
            this.notas[this.notaIndex].nota = this.notaTexto;
        
            this.atualizarStorage();

            this.limpar();
        },
        selecionar: function(e) {
            this.notaIndex = this.notas.findIndex(function(nota){
                return nota.id == e.target.dataset.notaId;
            });

            this.notaTexto = this.notas[this.notaIndex].nota;
        },
        deletar: function() {;
            this.notas.splice(this.notaIndex, 1);

            this.atualizarStorage();
        
            this.limpar();
            
        },
        atualizarStorage: function() {
            window.localStorage.setItem("notas", JSON.stringify(this.notas));
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
