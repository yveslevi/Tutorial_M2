function algo(){
    var id1 = document.getElementById('algo').value
    var id2 = document.getElementById('algo2').value
    
    var valor1 = id1;
    document.getElementById('algo').value = id2 
    document.getElementById('algo2').value = valor1

}