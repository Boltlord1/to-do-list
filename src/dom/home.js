export default function() {
    const main = document.querySelector('.main')
    main.innerHTML = ''
    main.id = 'home'

    const title = document.createElement('h1')
    title.classList.add('header')
    title.textContent = 'Todo List by Boltlord'
    main.appendChild(title)
}