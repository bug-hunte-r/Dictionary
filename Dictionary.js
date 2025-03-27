let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let modal = document.querySelector('.modal')
let nameWord = document.querySelector('.name')
let info = document.querySelector('.info')
let x = document.querySelector('.x')
let audioIcon = document.querySelector('.audioIcon')
let audio = document.querySelector('.audio')
let section = document.querySelector('.section')

let api = {
    url: 'https://api.dictionaryapi.dev/api/v2/entries/en/'
}

function fetchWord () {
    nameWord.innerHTML = '...'
    info.innerHTML = '...'

    fetch(`${api.url}${input.value}`)
            .then(res => res.json())
            .then(data => {
                showData(data)
            })

            input.value = ''
        }

function showData (data) {

    nameWord.innerHTML = data[0].word
    info.innerHTML = data[0].meanings[0].definitions[0].definition

    audioIcon.addEventListener('click', () => {
        audio.setAttribute('src', data[0].phonetics[1].audio)
        audio.play()
    })
} 

btn.addEventListener('click', () => {
        fetchWord()
})

btn.addEventListener('click', () => {
    modal.style.display = 'block'
    section.style.filter = 'blur(10px)'
})

x.addEventListener('click', () => {
    modal.style.display = 'none'  
    section.style.filter = 'blur(0px)'  
})