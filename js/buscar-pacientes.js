var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', function() {
    var url = 'http://api-pacientes.herokuapp.com/pacientes';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send();

    xhr.addEventListener('load', function() {
        console.log(xhr.responseText);
    });
});
