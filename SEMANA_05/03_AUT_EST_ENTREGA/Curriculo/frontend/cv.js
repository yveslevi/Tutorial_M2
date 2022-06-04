function enviar(){
    alert('A sugestão foi acatada com sucesso!')
}

function data(){
    $.get('http://localhost:3000/tbDados', (res) =>{
        console.log(res)
    $('#number').html(res.number);
    $('#email').html(res.email);
    $('#name').html(res.name);
    $('#zipcode').html(res.zipcode);

    })
}




