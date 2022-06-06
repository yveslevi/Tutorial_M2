function diurno(){
    var qpd = document.getElementById('quantidade').value
    if (qpd <= 50){
        var result = qpd*200
        document.getElementById('demo').innerHTML = result + " reais"
        
        
    }else{
        result = 80*qpd
        document.getElementById('demo').innerHTML = result + " reais"    
    }
}

function noturno(){
    var qpn = document.getElementById('quantidade').value
    if (qpn <= 50){
        var valor = qpn*100
        document.getElementById('demo').innerHTML = valor + " reais"
    }else{
        valor = qpn*80
        document.getElementById('demo').innerHTML = valor + " reais"       
    }
}