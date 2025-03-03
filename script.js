function verifica() {
    var input = document.getElementById('txtplaca')
    var valor = input.value
    var num = valor.length

    if (num >= 8) {
        alert('Aceito somente 7 números!')
        input.value = ""
    }
}

function efeito() {
    document.getElementById('main').addEventListener("mouseenter", function () {
        var main = document.getElementById('main')
        var chave = document.getElementsByClassName('titulo')
        
        main.style.backgroundImage = "url('download.gif')"
        main.style.backgroundSize = "cover"

        for (var i = 0; i < chave.length; i++) {
            chave[i].style.color = 'red';
        }
})

    document.getElementById('main').addEventListener("mouseleave", function() {
    var main = document.getElementById('main');
    var chave = document.getElementsByClassName('titulo')

    main.style.backgroundImage = '';

    for (var i = 0; i < chave.length; i++) {
        chave[i].style.color = ''; 
    }
    });
}

window.onload = efeito