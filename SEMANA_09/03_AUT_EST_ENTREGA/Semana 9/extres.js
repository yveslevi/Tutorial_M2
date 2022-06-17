function Calcular(){
    let name1 = document.getElementById('ehad').value;
    let name2 = document.getElementById('shtaim').value;
    let name3 = document.getElementById('shalosh').value;
    var arr = [];
    var result = arr.concat(name1,name2,name3).sort();
    document.getElementById('resp').innerHTML = result;
}