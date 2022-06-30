class TaskManager {
  constructor(currentId = 1) {
    this.currentId = currentId;
    this.tasks = [];
  }

  addTask(
    taskName,
    taskDescription,
    taskAssign,
    dueDate,
    taskPriority,
    taskStatus
  ) {
    const task = {
      id: this.currentId++,
      taskName: taskName,
      taskDescription: taskDescription,
      taskAssign: taskAssign,
      dueDate: dueDate,
      taskPriority: taskPriority,
      taskStatus: taskStatus,
    };
    this.tasks.push(task);
  }

  deleteTask(id) {}
}

// create a div = id is id
const oneCard = `
  <div class="oneTask">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.taskName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${this.dueDate}</h6>
          <p class="card-text">${this.taskAssign}</p>
          <p class="card-text">${this.taskDescription}</p>
          <p class="card-text">${this.taskStatus}</p>
          <p class="card-text">${this.taskPriority}</p>
        </div>
      </div>
    </div>
  </div>
)
`;
