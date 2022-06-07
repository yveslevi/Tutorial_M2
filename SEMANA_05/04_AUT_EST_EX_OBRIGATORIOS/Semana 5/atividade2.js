var n100 = 0;
var n50 = 0;
var n10 = 0;
var n5 = 0;
var n1 = 0;
function minhafuncao() {
    var total = document.getElementById('dinheiro').value;
    if (total >= 100){
        n100 = parseInt(total/100) // o parseInt faz o número ignorar a vírgula
        total -= (n100*100)
    } else if ( total >= 50){
        n50 = parseInt(total/50)
        total -= (n50*50)
    } else if (total >= 10){
        n10 = parseInt(total/10)
        total -= (n10*10)
    } else if (total >= 5){
        n5 = parseInt(total/5)
        total -= (n5*5)
    }else{
        total -= n1
    }
    alert('O total de cédulas é: ' + n100 + 'notas de 100 reais' + ',' + n50 + 'notas de 50 reais' + ',' + n10 + 'notas de 10 reais' + n5 +','+ 'notas de 5 reais' + total +'notas de 1 real')
}

