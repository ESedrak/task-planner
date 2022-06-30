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

function createCard(
  taskName,
  dueDate,
  taskAssign,
  taskDescription,
  taskStatus,
  taskPriority
) {
  const oneCard = `
            <div class="oneTask">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${taskName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${dueDate}</h6>
                    <p class="card-text">${taskAssign}</p>
                    <p class="card-text">${taskDescription}</p>
                    <p class="card-text">${taskStatus}</p>
                    <p class="card-text">${taskPriority}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
  return oneCard;
}
