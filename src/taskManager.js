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
}

function createCard(array) {
  const oneCard = `
            <div class="oneTask" id= ${array.id}>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${array.taskName}</h5>
                    <p class="card-text"> ${array.taskDescription}</p>
                    <p class="card-text">Assigned to: ${array.taskAssign}</p>
                    <h6 class="card-subtitle mb-2 text-muted">Due Date: ${array.dueDate}</h6>
                    <p class="card-text">Priority: ${array.taskPriority}</p>
                    <button type="button submit" class="btn btn-danger removeMe"> Delete </button>
                  </div>
                </div>
              </div>
            </div>
          `;
  return oneCard;
}
