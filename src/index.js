import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'
import home from './dom/home.js'
import storageAvailable from './dom/storage-available.js'
import setStorage from './dom/set-storage.js'

const ProjectManager = (function() {
    const projects = []
    let storedProjects = null
    const getProjects = () => projects
    const addProject = function(project) {
        projects.push(project)
        projects.at(-1).dom.append(projects.at(-1))
    }

    if (storageAvailable("localStorage")) {
        const storedString = localStorage.getItem("storedProjects")
        storedProjects = JSON.parse(storedString)
    }
    if (storedProjects instanceof Array) storedProjects.forEach(function(item) {
        const project = new Project(item.title)
        item.tasks.forEach(function(item) {
            project.addTask(new Task(item.name, item.desc, item.due, item.prio))
        })
        addProject(project)
    })

    return { getProjects, addProject }
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
    ProjectManager.addProject(new Project(title))
    projForm.reset()
    projDial.close()
}

const homeBut = document.querySelector('.home')
homeBut.addEventListener('click', home)
homeBut.dispatchEvent(new Event('click'))

addEventListener("visibilitychange", (event) => {
    if (storageAvailable("localStorage")) setStorage(ProjectManager.getProjects())
})
