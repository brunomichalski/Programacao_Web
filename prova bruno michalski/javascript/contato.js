
function validar() {
var nome1 = document.getElementById("nome");
var email1 = document.getElementById("email");
var comentario1 = document.getElementById("comentario");
 
    if (nome1.value == "") {
        alert('Preencha o campo com seu nome');
    
        return false;
    }

    if (email1.value == "") {
        alert('Preencha o campo com seu Email');
        
        return false;
    }  
     
    if (comentario1.value == "") {
        alert('Preencha o campo com sua mensagem');
        
        return false;
    }   
}
