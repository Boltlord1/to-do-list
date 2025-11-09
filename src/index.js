import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'
import ProjectAppender from './dom/project.js'
import TaskAppender from './dom/task.js'

const app = new Project('App')
console.log(app)
const task = new Task('kill', 'must... kill...', 'tomorrow', 'high')
app.addTask(task)
console.log(app.tasks)
ProjectAppender.append(app)
TaskAppender.append(task, app.id)