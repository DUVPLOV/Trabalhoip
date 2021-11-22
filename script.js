function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = 'Nada...';
    }
}
let like = window.prompt('voce gostou');
        let soma;
         let num = 0;

        if (like == 'sim') {
           window.alert('OBRIGADO');
             }
        while (like == 'nao') {
                    window.prompt('voce gostou');
                    num = num + 1;
                    if (num = 3) {
                        break
                    }
                }