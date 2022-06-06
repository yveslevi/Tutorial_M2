function calculo(){
    var v = document.getElementById('aidi').value
    var t = v/10
    var h = (v**2)/20
    var time = document.getElementById('tempo').value
    document.getElementById('tempo').innerHTML = t
    console.log(time)
    var height = document.getElementById('altura').value
    height = h
    document.getElementById('altura').innerHTML = h
    console.log(height)
}