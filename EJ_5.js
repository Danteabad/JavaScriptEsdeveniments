//EX2
document.onkeydown=function(letter){
    document.getElementById('teclat').innerHTML=letter.key;
}
document.onkeyup=function(){
    document.getElementById('teclat').innerHTML=' ';
}