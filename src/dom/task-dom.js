export default class TaskDom {
    static append(obj, pro) {
        const tasks = document.querySelector('.tasks')
        const task = document.createElement('div')
        task.classList.add('task')

        const name = document.createElement('div')
        const desc = document.createElement('div')
        const due = document.createElement('div')
        const priority = document.createElement('div')
        const remove = document.createElement('button')
        const complete = document.createElement('button')

        name.textContent = obj.name
        desc.textContent = obj.desc
        due.textContent = obj.due
        priority.textContent = obj.priority
        complete.textContent = 'complete'
        remove.textContent = 'remove'

        task.appendChild(name)
        task.appendChild(desc)
        task.appendChild(due)
        task.appendChild(priority)
        task.appendChild(complete)
        task.appendChild(remove)
        tasks.appendChild(task)

        complete.addEventListener('click', function() {
            task.remove()
            obj.status = true
            pro.deleteTask(obj)
            console.log(pro)
        })

        remove.addEventListener('click', function() {
            task.remove()
            pro.deleteTask(obj)
        })
    }
}