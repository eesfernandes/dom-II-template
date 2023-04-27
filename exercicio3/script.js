const checaCaps = (event) => {
   
    const mensagem = document.getElementById('mensagem')

    if(event.shiftKey){
        mensagem.innerHTML = 'ATENÇÃO: Shift Pressionado!'
    } else {
        mensagem.innerHTML = ''
    }
}