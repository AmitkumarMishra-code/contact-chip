let displayDiv = document.querySelector('.display-area')
let inputField = document.querySelector('.contact-name')

let addButton = document.querySelector('.add-contact')

addButton.addEventListener('click', clickHandler)

function clickHandler(e) {
    let contactName = inputField.value
    inputField.value = ''
    let newContact = createContact(contactName)
    displayDiv.appendChild(newContact)
}

function removeContactHandler(e) {
    e.target.parentNode.remove()
}

function createContact(name) {
    let contactChip = document.createElement('div')
    contactChip.className = 'contact-chip'
    let userAvatar = document.createElement('img')
    userAvatar.src = '/bBHe98c - Imgur.png'
    let userName = document.createElement('p')
    userName.innerText = name
    let removeButton = document.createElement('button')
    removeButton.innerText = 'x'
    removeButton.className = 'remove-button'
    removeButton.addEventListener('click', removeContactHandler)
    contactChip.appendChild(userAvatar)
    contactChip.appendChild(userName)
    contactChip.appendChild(removeButton)
    return contactChip
}