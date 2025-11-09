import TaskDom from './task-dom.js'
import { addForm } from './task-form.js'
export default class ProjectDom {
    main = document.querySelector('.main')
    sidebar = document.querySelector('.sidebar')
    
    display(obj) {
        this.main.innerHTML = ''
        this.main.id = obj.id

        const header = document.createElement('div')
        header.classList.add('header')
        this.main.appendChild(header)
        const title = document.createElement('h1')
        title.textContent = obj.title
        header.appendChild(title)

        const add = document.createElement('button')
        add.textContent = 'Add Task'
        header.appendChild(add)
        add.addEventListener('click', function() {
            addForm(obj)
        })

        const tasks = document.createElement('div')
        tasks.classList.add('tasks')
        this.main.appendChild(tasks)
        obj.tasks.forEach(item => {
            TaskDom.append(item, obj)
        })
    }

    append(obj) {
        this.display(obj)
        const but = document.createElement('button')
        but.textContent = obj.title
        but.addEventListener('click', function() {
            obj.dom.display(obj)
        })
        this.sidebar.appendChild(but)
    }
}