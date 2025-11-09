export default class Task {
    idParent
    status = false
    constructor(name, desc, due, priority) {
        this.name = name
        this.desc = desc
        this.due = due
        this.priority = priority
        this.id = `t-${crypto.randomUUID()}`
    }
}