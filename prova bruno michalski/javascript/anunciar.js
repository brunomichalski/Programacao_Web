function validar() {
    var nome1 = document.getElementById("nome");
    var ano1 = document.getElementById("ano");
    var comentario1 = document.getElementById("comentario");
    var km1 = document.getElementById("km");
    var valor1 = document.getElementById("valor")
    var arquivo1 = document.getElementById("arquivo");

        if (nome1.value == "") {
            alert('Preencha o campo com seu nome');
        
            return false;
        }
         
        if (comentario1.value == "") {
            alert('Preencha o campo com sua descrição');
            
            return false;
        }   

        if (ano1.value == "") {
            alert('Preencha o campo com o ano do veículo');
            
            return false;
        }   

        if (km1.value == "") {
            alert('Preencha o campo com a quiilometragem');
            
            return false;
        }

        if (valor1.value == "") {
            alert('Preencha o campo com o valor do veículo');
            
            return false;
        } 

        if(document.formA.combo[0].checked == false 
        && document.formA.combo[1].checked == false
        && document.formA.combo[2].checked == false){
            alert('Selecione algum tipo de combustivel');
            return false;
        }

        if(arquivo1.value == null){
            alert('Selecione a imagem');
            
            return false;
        }


  
    }