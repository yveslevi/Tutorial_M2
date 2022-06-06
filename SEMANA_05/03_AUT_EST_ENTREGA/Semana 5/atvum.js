function conta(){
    var numberone = parseInt(document.getElementById('num1').value);
    var numbertwo = parseInt(document.getElementById('num2').value);
    var resultado = document.getElementById('resposta').innerText = "a."+ (numberone + numbertwo) +" b."+ (numberone - numbertwo) + " c." + numberone*numbertwo + " d."+ numberone/numbertwo +" e."+ ~~(numberone/numbertwo) + " f." + numberone%numbertwo;

}