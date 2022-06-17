function Calcular(){
    var num = document.getElementById('number').value;
    var str = num.split("");
    var sum = 0;
    for (let i = 0; i<str.length;i++){
        sum += parseInt(str[i]);
    }
    document.getElementById('resp').innerHTML = sum;  
}