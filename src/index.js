import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'

const ProjectManger = (function() {
    const projects = []
    projects.push(new Project('App'))
    projects[0].addTask(new Task('kill', 'must... kill...', '2025-11-11', 'high'))
    projects[0].addTask(new Task('live', 'must... live...', '2025-11-11', 'low'))
    projects[0].dom.append(projects[0])
    projects.push(new Project('Map'))
    projects[1].addTask(new Task('live', 'must... live...', '2025-12-01', 'low'))
    projects[1].addTask(new Task('kill', 'must... kill...', '2025-12-01', 'high'))
    projects[1].dom.append(projects[1])

    const newProject = function(obj) {
        projects.push(obj)
        obj.dom.append(obj)
    }

    const activeProject = projects.find((item) => item.id === document.querySelector('.main').id)
    const getActiveProject = () => activeProject

    //const taskForEdit = () => activeProject.tasks.filter((item) => item.edit === true)
    //const getTaskForEdit = () => taskForEdit().edit === true ? taskForEdit() : { edit: false }
    /* const getTaskForEdit = function() {
        let task = activeProject.tasks.find((item) => item.edit === true)
        if (!task) return { edit: false }
        return task
    } */

    return { newProject, getActiveProject }
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
    ProjectManger.newProject(new Project(title))
    projDial.close()
}

/* const taskForm = document.querySelector('.task-form')
taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(taskForm)
    const name = formData.get('task-name')
    const desc = formData.get('task-desc')
    const due = formData.get('task-due')
    const prio = formData.get('task-prio')
    const active = ProjectManger.getActiveProject()
    const task = ProjectManger.getTaskForEdit()
    console.log(task)
    if (task.edit === true) edit(name, desc, due, prio, active, task)
    else add(name, desc, due, prio, active)
})

function add(name, desc, due, prio, active) {
    active.addTask(new Task(name, desc, due, prio))
    active.dom.display(active)
}

function edit(name, desc, due, prio, active, task) {
    task.edit = false
    active.editTask(task, new Task(name, desc, due, prio))
    active.dom.display(active)
} */