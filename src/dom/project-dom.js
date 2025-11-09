import TaskDom from './task-dom.js'
export default class ProjectDom {
    main = document.querySelector('.main')
    sidebar = document.querySelector('.sidebar')
    display(obj) {
        this.main.innerHTML = ''
        this.main.id = obj.id
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