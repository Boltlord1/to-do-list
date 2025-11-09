export default class ProjectAppender {
    static main = document.querySelector('.main')
    static append(obj) {
        const project = document.createElement('div')
        project.classList.add('project')
        project.id = obj.id
        this.main.appendChild(project)
    }
}