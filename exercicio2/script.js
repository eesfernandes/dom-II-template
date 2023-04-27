let cont = 0
const esconderSenha = (event) => {
    event.preventDefault()
    cont += 1
    if(cont % 2 === 0){
        document.getElementById('password').setAttribute('type', 'password');
    } else {
        document.getElementById('password').setAttribute('type', 'text');
    }

}

const alterarClasse = document.querySelector('.light')
alterarClasse.classList.remove('light')
alterarClasse.classList.add('dark')