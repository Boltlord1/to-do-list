export default class TaskAppender {
    static append(obj, pro) {
        const project = document.getElementById(pro)
        const task = document.createElement('div')
        task.classList.add('task')

        const title = document.createElement('div')
        const desc = document.createElement('div')
        const due = document.createElement('div')
        const priority = document.createElement('div')

        title.textContent = obj.title
        desc.textContent = obj.desc
        due.textContent = obj.due
        priority.textContent = obj.priority

        task.appendChild(title)
        task.appendChild(desc)
        task.appendChild(due)
        task.appendChild(priority)
        project.appendChild(task)
    }
}