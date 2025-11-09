import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'

const app = new Project('App')
app.addTask(new Task('kill', 'must... kill...', 'tomorrow', 'high'))
app.addTask(new Task('live', 'must... live...', 'today', 'low'))
app.dom.append(app)
const map = new Project('Map')
map.addTask(new Task('live', 'must... live...', 'today', 'low'))
map.addTask(new Task('kill', 'must... kill...', 'tomorrow', 'high'))
map.dom.append(map)

const newProj = document.querySelector('.new-button')
const newDiag = document.querySelector('.new-dialog')
newProj.addEventListener('click', () => newDiag.showModal())
const newForm = document.querySelector('.new-form')
newForm.addEventListener('submit', addProj)
function addProj(event) {
    event.preventDefault()
    const formData = new FormData(newForm)
    const title = formData.get('new-title')
    const project = new Project(title)
    project.dom.append(project)
}