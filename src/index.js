import './styles.css'
import Project from './logic/project.js'
import Task from './logic/task.js'

const app = new Project('App')
app.addTask(new Task('kill', 'must... kill...', 'tomorrow', 'high'))
app.addTask(new Task('live', 'must... live...', 'today', 'low'))
app.dom.append(app)
const map = new Project('Map')
map.addTask(new Task('live', 'must... live...', 'today', 'low'))
map.addTask(new Task('kill', 'must... kill...', 'tomorrow', 'high'))
map.dom.append(map)