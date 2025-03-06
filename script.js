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

        let delBtn=document.createElement('div')
        delBtn.classList.add('deleteNote')
        delBtn.innerHTML='X'
        noteElement.appendChild(delBtn)

        delBtn.addEventListener('click',(e)=>{
            console.log('hello')
        })
        pad.appendChild(noteElement)


    }
}