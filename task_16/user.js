export class User {
    taks;

    constructor(task) {
        this.task = task;
    }

    do() {
        this.task.run();
    }
}