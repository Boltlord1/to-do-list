import ProjectDom from '../dom/project-dom.js'
export default class Project {
    #tasks = []
    #finished = []
    id = `p-${crypto.randomUUID()}`
    dom = new ProjectDom()
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

    editTask(task, newTask) {
        const index = this.#tasks.findIndex((item) => item === task)
        this.#tasks[index] = newTask
    }
}