export default class Task {
    idParent
    status = false
    constructor(title, desc, due, priority) {
        this.title = title
        this.desc = desc
        this.due = due
        this.priority = priority
        this.id = `t-${crypto.randomUUID()}`
    }
}