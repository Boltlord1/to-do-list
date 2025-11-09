export default class Project {
    #tasks = []
    constructor(title, id) {
        this.title = title
        this.id = `p-${crypto.randomUUID()}`
    }

    get tasks() {
        return this.#tasks
    }

    addTask(task) {
        this.#tasks.push(task)
    }
}