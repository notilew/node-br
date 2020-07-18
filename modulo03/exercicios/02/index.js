class Task {

    constructor() {
        this.tasks = [];
    }

    get tasks() {
        return [...this.tasks];
    }

    createTask(name) {
        const task = { title: name, completed: false };

        this.tasks.push(task);
    }

}

module.exports = Task;