console.log(document.title);
document.litle="Nuevo Titulo de pagina";
console.log(document.litle);
console.log(document.body);


var boton = document.getElementById('Boton');
console.log(boton);

boton.addEventListener('click',mensaje);

function mensaje(){
    alert("Mensaje");
}