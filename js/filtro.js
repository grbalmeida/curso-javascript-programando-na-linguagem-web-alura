var campoFiltro = document.querySelector('#filtrar-tabela');
var pacientes = document.querySelectorAll('.paciente');

campoFiltro.addEventListener('input', function(event) {
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector('.info-nome');
        var nome = paciente.textContent;
    }
});
