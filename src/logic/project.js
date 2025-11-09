import ProjectDom from '../dom/project-dom.js'
export default class Project {
    #tasks = []
    #finished = []
    id = `p-${crypto.randomUUID()}`
    dom = new ProjectDom('jack')
    constructor(title) {
        this.title = title
    }

    get tasks() {
        return this.#tasks
    }

    get finishedTasks() {
        return this.#finished
    }

    addTask(task) {
        this.#tasks.push(task)
        task.idParent = this.id
    }

    deleteTask(task) {
        this.#tasks = this.#tasks.filter((item) => item.id !== task.id)
        if (task.status) this.#finished.push(task)
    }
}