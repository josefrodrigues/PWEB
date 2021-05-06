document.addEventListener("DOMContentLoaded", () =>{

    var form = document.forms["formulario"];
    var nome = document.forms["formulario"].elements["nome"];
    var email = document.forms["formulario"].elements["email"];
    var comentario = document.forms["formulario"].elements["comentario"];
    var pesquisaSim = document.forms["formulario"].elements["pesquisaSim"];
    var pesquisaNao = document.forms["formulario"].elements["pesquisaNao"];

    form.addEventListener('submit', (evt) => {
        if (!validar()){
            evt.preventDefault();
        }

    });

    function validar(){

        if(nome.value.length < 10){
            alert("O nome não pode ter menos do que 10 caracteres.");
            nome.focus();
            return false;
        }

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            alert("O formato do e-mail é inválido.");
            email.focus();
            return false;
        }

        if(comentario.value.length < 10){
            alert("O comentário não pode ter menos do que 20 caracteres.");
            comentario.focus();
            return false;
        }

        if(!(pesquisaSim.checked || pesquisaNao.checked)){
            alert("O preenchimento da pesquisa é obrigatório.");
            return false;
        }
        
        alert(pesquisaNao.checked ? "Agradecemos sua participação novamente :)" : "Obrigado por responder a nossa pesquisa!");
    }

});