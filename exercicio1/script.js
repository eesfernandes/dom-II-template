// Criando um novo elemento - Tag Li
const newli0 = document.createElement('li');

// Criando o texto para ser inserido na tag Li
const newtext0 = document.createTextNode('Item 0');

// Inserindo na Li o novo texto
newli0.appendChild(newtext0)

// Pegando o elemento pai que eu quero inserir a nova tag
const addNaUl0 = document.getElementById('lista')

// 1nserindo a tag LI criada, dentro do elemento pai e no inicio
addNaUl0.insertAdjacentElement("afterbegin", newli0)



const newli5 = document.createElement('li')

const newtext5 = document.createTextNode('Item 5')

newli5.appendChild(newtext5)

const addNaUl5 = document.getElementById('lista')

addNaUl5.insertAdjacentElement("beforeend", newli5)