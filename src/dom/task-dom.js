import { editForm } from './task-form.js'
export default class TaskDom {
    static append(obj, pro) {
        const tasks = document.querySelector('.tasks')
        const task = document.createElement('div')
        const row = document.createElement('div')
        task.classList.add('task')
        row.classList.add('row')

        const name = document.createElement('div')
        const drop = document.createElement('div')
        const due = document.createElement('div')
        const priority = document.createElement('div')
        const remove = document.createElement('button')
        const complete = document.createElement('button')
        const edit = document.createElement('button')

        name.textContent = obj.name
        due.textContent = obj.due
        priority.textContent = obj.priority
        complete.textContent = 'complete'
        remove.textContent = 'remove'
        edit.textContent = 'edit'

        row.appendChild(name)
        row.appendChild(drop)
        row.appendChild(due)
        row.appendChild(priority)
        row.appendChild(complete)
        row.appendChild(remove)
        row.appendChild(edit)
        tasks.appendChild(task)
        task.appendChild(row)

        if (obj.desc) {
            drop.textContent = '^'

            const desc = document.createElement('div')
            desc.textContent = obj.desc
            desc.classList.add('desc')
            desc.style.display = 'none'
            task.appendChild(desc)
            task.addEventListener('click', function() {
                desc.style.display = desc.style.display === 'none' ? 'block' : 'none'
                drop.textContent = drop.textContent === '^' ? 'V' : '^'
            })
        }

        complete.addEventListener('click', function() {
            task.remove()
            obj.status = true
            pro.deleteTask(obj)
        })

        remove.addEventListener('click', function() {
            task.remove()
            pro.deleteTask(obj)
        })

        edit.addEventListener('click', function(event) {
            event.stopPropagation()
            editForm(pro, obj)
        })
    }
}