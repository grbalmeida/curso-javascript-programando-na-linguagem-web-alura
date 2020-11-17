var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', function() {
    var url = 'http://api-pacientes.herokuapp.com/pacientes';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send();

    xhr.addEventListener('load', function() {
        var erroAjax = document.querySelector('#erro-ajax');

        if (xhr.status === 200) {
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove('invisivel');
        }
    });
});
