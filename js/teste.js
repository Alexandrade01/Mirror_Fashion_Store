alert("Olá, Mundo!");

function validaBuscaAlert() {
    /* se a query selector ou a busca pela pesquisa for vazia volte um alerta como mensagem  */
    if (document.querySelector('#q').value == '') {
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
} 

function validaBuscaBackGroundAlert() {
    /* se a query selector ou a busca pela pesquisa for vazia volte um alerta */
    if (document.querySelector('#q').value == '') {
        document.querySelector('#form-busca').style.background = 'red';
        return false;
    }
}

// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = validaBusca;