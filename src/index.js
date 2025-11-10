import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'
import home from './dom/home.js'

const app = new Project('App')
app.addTask(new Task('kill', 'must... kill...', '2025-11-11', 'high'))
app.addTask(new Task('live', 'must... live...', '2025-11-11', 'low'))
app.dom.append(app)
const map = new Project('Map')
map.addTask(new Task('live', 'must... live...', '2025-12-01', 'low'))
map.addTask(new Task('kill', 'must... kill...', '2025-12-01', 'high'))
map.dom.append(map)

const projBut = document.querySelector('.proj-button')
const projDial = document.querySelector('.proj-dialog')
projBut.addEventListener('click', () => projDial.showModal())
const projForm = document.querySelector('.proj-form')
projForm.addEventListener('submit', addProj)
function addProj(event) {
    event.preventDefault()
    const formData = new FormData(projForm)
    const title = formData.get('proj-title')
    const proj = new Project(title)
    proj.dom.append(proj)
    projDial.close()
}

const homeBut = document.querySelector('.home')
homeBut.addEventListener('click', home)
homeBut.dispatchEvent(new Event('click'))