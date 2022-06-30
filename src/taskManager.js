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
  taskDescription,
  taskAssign,
  dueDate,
  taskPriority,
  id
) {
  const oneCard = `
            <div class="oneTask" id= ${id}>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${taskName}</h5>
                    <p class="card-text"> I think things are not corect${taskDescription}</p>
                    <p class="card-text">Assigned to: ${taskAssign}</p>
                    <h6 class="card-subtitle mb-2 text-muted">Due Date: ${dueDate}</h6>
                    <p class="card-text">Priority: ${taskPriority}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
  return oneCard;
}
