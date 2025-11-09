import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'

const ProjectManger = (function() {
    const projects = []
    projects.push(new Project('App'))
    projects[0].addTask(new Task('kill', 'must... kill...', 'tomorrow', 'high'))
    projects[0].addTask(new Task('live', 'must... live...', 'today', 'low'))
    projects[0].dom.append(projects[0])
    projects.push(new Project('Map'))
    projects[1].addTask(new Task('live', 'must... live...', 'today', 'low'))
    projects[1].addTask(new Task('kill', 'must... kill...', 'tomorrow', 'high'))
    projects[1].dom.append(projects[1])

    const getActiveProject = () => projects.filter((item) => item.id === document.querySelector('.main').id)[0]

    return { getActiveProject }
})()

const projBut = document.querySelector('.proj-button')
const projDial = document.querySelector('.proj-dialog')
projBut.addEventListener('click', () => projDial.showModal())
const projForm = document.querySelector('.proj-form')
projForm.addEventListener('submit', addProj)
function addProj(event) {
    event.preventDefault()
    const formData = new FormData(projForm)
    const title = formData.get('proj-title')
    const project = new Project(title)
    project.dom.append(project)
    projDial.close()
}

const taskForm = document.querySelector('.task-form')
taskForm.addEventListener('submit', addTask)
function addTask(event) {
    event.preventDefault()
    const formData = new FormData(taskForm)
    const name = formData.get('task-name')
    const desc = formData.get('task-desc')
    const due = formData.get('task-due')
    const prio = formData.get('task-prio')
    const active = ProjectManger.getActiveProject()
    active.addTask(new Task(name, desc, due, prio))
    active.dom.display(active)
}