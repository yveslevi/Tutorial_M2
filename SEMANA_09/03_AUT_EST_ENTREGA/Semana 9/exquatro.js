function sequencia(){
    let num = document.getElementById('n').value;
    let i = 1;
    let j = 1;
    var cont = 3;
    let s
    var arr = [1,1];
    while (cont<=num){
        s = i + j;
        i = j;
        j = s;
        cont += 1;
        arr.push(s);
    }
    document.getElementById('demo').innerHTML = arr;
}
