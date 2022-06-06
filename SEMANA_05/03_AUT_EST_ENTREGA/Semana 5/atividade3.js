function seq(){
    var sq = document.getElementById('i1').value
    var array = sq.split(',');
    array.sort();
    document.getElementById('sqo').innerText = array
    var position = document.getElementById('i2').value
    
}
