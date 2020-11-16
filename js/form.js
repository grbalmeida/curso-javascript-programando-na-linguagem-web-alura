var botaoAdicionar = document.querySelector('#adicionar-paciente');
var tabela = document.querySelector('#tabela-pacientes');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);

    tabela.appendChild(montaTr(paciente));

    form.reset();
});

function obtemPacienteDoFormulario(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    var nomeTd = montaTd(paciente.nome, 'info-nome');
    var pesoTd = montaTd(paciente.peso, 'info-peso');
    var alturaTd = montaTd(paciente.altura, 'info-altura');
    var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    var imcTd = montaTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(texto, classe) {
    var td = document.createElement('td');
    td.textContent = texto;
    td.classList.add(classe);

    return td;
}
