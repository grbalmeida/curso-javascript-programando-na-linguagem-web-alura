var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
    var pacientes = document.querySelectorAll('.paciente');

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector('.info-nome');
        var nome = tdNome.textContent.trim();
        var expressao = new RegExp(this.value.trim(), 'i');

        if (!expressao.test(nome)) {
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel');
        }
    }
});
