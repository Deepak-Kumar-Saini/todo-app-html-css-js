let textString = document.getElementById('inputeText')
let button = document.getElementById('btn')
let pad = document.getElementById('bottom');

button.addEventListener('click', (e) => {
    e.preventDefault()
    createNote(textString.value)
    textString.value = ''
})

function createNote(note) {
    if (note) {
        let noteElement = document.createElement('div')
        noteElement.classList.add('padNote')
        noteElement.innerHTML = note
        pad.appendChild(noteElement)
    }
}