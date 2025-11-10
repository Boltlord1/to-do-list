export default function setStorage(arr) {
    const projectsJSON = JSON.stringify(arr.map(function(item) {
        const obj = {
            title: item.title,
            tasks: item.tasks.map(function(thing) {
                const ojj = {
                    name: thing.name,
                    desc: thing.desc,
                    due: thing.due,
                    prio: thing.priority
                }
                return ojj
            })
        }
        return obj
    }))
    localStorage.setItem("storedProjects", projectsJSON)
}