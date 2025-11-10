import Task from '../logic/task.js'
export default function generateForm(edit, proj, task) {
    const dial = document.querySelector('.task-dialog') 
    const form = document.createElement('form')
    dial.replaceChildren()

    form.classList.add('task-form')
    const header = document.createElement('h1')
    header.classList.add('task-header')
    header.textContent = edit ? 'Edit Task' : 'Add Task'
    form.appendChild(header)

    const contents = [
        { class: 'task-name', text: 'Name' }, { class: 'task-desc', text: 'Description' },
        { class: 'task-due', text: 'Due date' }, { class: 'task-prio', text: 'Priority' }
    ]
    for (const [index, obj] of contents.entries()) {
        obj.parent = document.createElement('div')
        obj.label = document.createElement('label')
        if (index === 1) obj.input = document.createElement('textarea')
        else if (index === 3) obj.input = document.createElement('select')
        else obj.input = document.createElement('input')
        obj.parent.classList.add(obj.class)
        obj.label.textContent = obj.text
        obj.label.htmlFor = obj.class
        obj.input.name = obj.class
        obj.input.id = obj.class
        obj.input.type
        obj.parent.appendChild(obj.label)
        obj.parent.appendChild(obj.input)
        form.appendChild(obj.parent)
    }
    contents[0].input.type = 'text'
    contents[0].input.required = true
    contents[0].input.minLength = 4
    contents[2].input.type = 'date'
    contents[2].input.required = true
    contents[3].button = document.createElement('button')
    contents[3].selected = document.createElement('selectedcontent')
    contents[3].button.appendChild(contents[3].selected)
    contents[3].input.appendChild(contents[3].button)

    contents[3].options = [ { text: 'low'}, { text: 'medium'}, { text: 'high'} ]
    for (const opt of contents[3].options) {
        opt.option = document.createElement('option')
        opt.option.classList.add('option')
        opt.option.classList.add(opt.text)
        opt.option.value = opt.text
        opt.span = document.createElement('span')
        opt.span.textContent = opt.text.charAt(0).toUpperCase() + opt.text.slice(1)
        opt.option.appendChild(opt.span)
        contents[3].input.appendChild(opt.option)
    }

    if (edit) {
        contents[0].input.value = task.name
        contents[1].input.textContent = task.desc
        contents[2].input.value = task.due
        contents[3].options.find((item) => item.option.value === task.priority).option.selected = true
    }

    const sub = document.createElement('button')
    sub.classList.add('task-submit')
    sub.type = 'submit'
    sub.textContent = edit ? 'Edit' : 'Add'
    form.appendChild(sub)
    dial.appendChild(form)
    dial.showModal()

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const formData = new FormData(form)
        const name = formData.get('task-name')
        const desc = formData.get('task-desc')
        const due = formData.get('task-due')
        const prio = formData.get('task-prio')
        edit ? (proj.editTask(task, new Task(name, desc, due, prio)), dial.close())
        : (proj.addTask(new Task(name, desc, due, prio)), form.reset())
        proj.dom.display(proj)
    })
}