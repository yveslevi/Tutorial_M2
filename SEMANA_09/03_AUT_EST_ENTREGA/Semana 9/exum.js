function Calcular(){
    var num = document.getElementById('number').value;
    var str = num.split("");
    if (str[0]%2==0){
        document.getElementById('resp').innerText = str[0] + " é par";
    }else{
        document.getElementById('resp').innerText = str[0] + " é ímpar";
    }
}
