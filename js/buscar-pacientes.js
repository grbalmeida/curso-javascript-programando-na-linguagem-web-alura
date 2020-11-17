var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', function() {
    var url = 'http://api-pacientes.herokuapp.com/pacientes';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send();

    xhr.addEventListener('load', function() {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });
});
