const insereItem = () => {

    const pegarInput = document.getElementById('meu-input').value
    
    const newLi = document.createElement('li')

    const newText = document.createTextNode(pegarInput)

    newLi.appendChild(newText)

    const pegarUl = document.getElementById('lista')

    pegarUl.insertAdjacentElement('beforeend', newLi)

}