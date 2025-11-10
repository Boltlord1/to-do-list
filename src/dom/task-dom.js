import generateForm from './task-form.js'
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
        priority.classList.add('priority')
        priority.classList.add(obj.priority)
        name.textContent = obj.name
        due.textContent = obj.due
        priority.textContent = obj.priority.charAt(0).toUpperCase() + obj.priority.slice(1)

        const drop = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        drop.classList.add('drop')
        drop.setAttribute('viewBox', '0 0 24 24')
        path.setAttribute('d', 'M1,21H23L12,2')

        const svgs = [
            { path: 'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z' },
            { path: 'M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z' },
            { path: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' }
        ]
        for (const [index, svg] of svgs.entries()) {
            svg.parent = document.createElement('button')
            svg.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            svg.element.setAttribute('viewBox', '0 0 24 24')
            svg.pathEle = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            svg.pathEle.setAttribute('d', svg.path)
            svg.element.appendChild(svg.pathEle)
            svg.parent.appendChild(svg.element)
        }
        svgs[0].parent.classList.add('check')
        svgs[1].parent.classList.add('cross')
        svgs[2].parent.classList.add('pencil')

        row.appendChild(name)
        row.appendChild(drop)
        row.appendChild(due)
        row.appendChild(priority)
        row.appendChild(svgs[0].parent)
        row.appendChild(svgs[1].parent)
        row.appendChild(svgs[2].parent)
        tasks.appendChild(task)
        task.appendChild(row)

        if (obj.desc) {
            drop.appendChild(path)
            const desc = document.createElement('div')
            desc.textContent = obj.desc
            desc.classList.add('desc')
            desc.style.display = 'none'
            task.appendChild(desc)
            task.addEventListener('click', function() {
                desc.style.display = desc.style.display === 'none' ? 'block' : 'none'
                drop.style.transform = drop.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)'
            })
        }

        svgs[0].parent.addEventListener('click', function() {
            task.remove()
            obj.status = true
            pro.deleteTask(obj)
        })

        svgs[1].parent.addEventListener('click', function() {
            task.remove()
            pro.deleteTask(obj)
        })

        svgs[2].parent.addEventListener('click', function(event) {
            event.stopPropagation()
            generateForm(true, pro, obj)
        })
    }
}