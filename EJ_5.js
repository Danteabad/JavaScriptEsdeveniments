//EX2
/*document.onkeydown=function(letter){
    document.getElementById('teclat').innerHTML=letter.key;
}
document.onkeyup=function(){
    document.getElementById('teclat').innerHTML=' ';
}*/

//EX3
document.onkeydown=function(letter){
    document.getElementById('teclat').innerHTML=letter.key;
    var contador = document.getElementById('acumula');
    contador.innerHTML += letter.key + ' '
}

document.onkeyup=function(){
    document.getElementById('teclat').innerHTML=' ';
}
