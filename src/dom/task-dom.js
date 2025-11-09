export default class TaskDom {
    static append(obj, pro) {
        const tasks = document.querySelector('.tasks')
        const task = document.createElement('div')
        const row = document.createElement('div')
        task.classList.add('task')
        row.classList.add('row')

        const name = document.createElement('div')
        const due = document.createElement('div')
        const priority = document.createElement('div')
        const remove = document.createElement('button')
        const complete = document.createElement('button')

        name.textContent = obj.name
        due.textContent = obj.due
        priority.textContent = obj.priority
        complete.textContent = 'complete'
        remove.textContent = 'remove'

        task.appendChild(row)
        row.appendChild(name)
        if (obj.desc) {
            const drop = document.createElement('div')
            drop.textContent = obj.desc ? '^' : ''
            row.appendChild(drop)

            const desc = document.createElement('div')
            desc.textContent = obj.desc
            desc.classList.add('desc')
            task.appendChild(desc)
            task.addEventListener('click', function() {
                desc.style.display = desc.style.display === 'none' ? 'block' : 'none'
            })
        }

        row.appendChild(due)
        row.appendChild(priority)
        row.appendChild(complete)
        row.appendChild(remove)
        tasks.appendChild(task)

        complete.addEventListener('click', function() {
            task.remove()
            obj.status = true
            pro.deleteTask(obj)
        })

        remove.addEventListener('click', function() {
            task.remove()
            pro.deleteTask(obj)
        })
    }
}