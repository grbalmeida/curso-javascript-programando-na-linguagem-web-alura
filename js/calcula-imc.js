var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        tdImc.textContent = 'Peso inválido!';
    }

    if (!alturaEhValida) {
        tdImc.textContent = 'Altura inválida!';
    }

    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = calculaImc(peso, altura);
    } else {
        paciente.classList.add('paciente-invalido');
    }
}

function validaPeso(peso) {
    return peso >= 0 && peso < 1000;
}

function validaAltura(altura) {
    return altura >= 0 && altura <= 3;
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
