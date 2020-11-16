var botaoAdicionar = document.querySelector('#adicionar-paciente');
var tabela = document.querySelector('#tabela-pacientes');
var mensagensErro = document.querySelector('#mensagens-erro');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length) {
        exibeMensagensDeErro(erros);
        return;
    }

    tabela.appendChild(montaTr(paciente));

    form.reset();

    mensagensErro.innerHTML = '';
});

function exibeMensagensDeErro(erros) {
    mensagensErro.innerHTML = '';
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        mensagensErro.appendChild(li);
    });
}

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

function validaPaciente(paciente) {
    var erros = [];

    if (!paciente.nome.trim()) erros.push('O nome não pode ser em branco');
    if (!paciente.peso.trim()) erros.push('O peso não pode ser em branco');
    if (!paciente.altura.trim()) erros.push('A altura não pode ser em branco');
    if (!validaPeso(paciente.peso)) erros.push('Peso é inválido');
    if (!validaAltura(paciente.altura)) erros.push('Altura é inválida');
    if (!paciente.gordura.trim()) erros.push('A gordura não pode ser em branco');

    return erros;
}
