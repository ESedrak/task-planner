class TaskManager {
  constructor(currentId = 1) {
    this.currentId = currentId;
    this.tasks = [];
  }

  addTask(taskName, taskDescription, taskAssign, dueDate, priority, status) {
    const task = {
      id: this.currentId++,
      taskName: taskName,
      taskDescription: taskDescription,
      taskAssign: taskAssign,
      dueDate: dueDate,
      priority: priority,
      status: status,
    };
    this.tasks.push(task);
  }

  deleteTask(id) {}
}

// create a div = id is id
