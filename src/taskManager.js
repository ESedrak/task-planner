class TaskManager {
  constructor(currentId = 1) {
    this.currentId = currentId;
    this.tasks = [];
    this.DOMrender = false;
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
      DOMrender: this.DOMrender,
    };
    this.tasks.push(task);
  }

  // Render the tasks
  render() {
    this.tasks.forEach((task) => {
      let oneTask = document.createElement("div");
      if (task.DOMrender === false) {
        oneTask.innerHTML = createCard(task);
        document.body.appendChild(oneTask);
        task.DOMrender = !task.DOMrender;

        // To delete Task Card from DOM
        this.deleteTask(task);
      }

      // Completed Task
      document
        .querySelector(`#taskDoneBtn${task.id}`)
        .addEventListener("click", () => {
          task.taskStatus = "complete";
          document.querySelector("#completed").appendChild(oneTask);
          document
            .querySelector(`#taskDoneBtn${task.id}`)
            .setAttribute("hidden", "");
        });

      // Sort into columns
      if (taskStatus.value === "toDo") {
        document.querySelector("#toDoList").appendChild(oneTask);
      } else if (taskStatus.value === "inProgress") {
        document.querySelector("#inProgress").appendChild(oneTask);
      } else if (taskStatus.value === "review") {
        document.querySelector("#review").appendChild(oneTask);
      } else if ((taskStatus.value = "complete")) {
        document.querySelector("#completed").appendChild(oneTask);
      }
    });
  }

  //
  deleteTask(task) {
    document
      .querySelector(`#taskDeleteBtn${task.id}`)
      .addEventListener("click", () => {
        document.querySelector(`#card${task.id}`).remove();
        this.tasks.splice(task, 1);
      });
  }
}

function createCard(array) {
  const oneCard = `
            <div class="oneTask" id="card${array.id}">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${array.taskName}</h5>
                    <p class="card-text"> ${array.taskDescription}</p>
                    <p class="card-text">Assigned to: ${array.taskAssign}</p>
                    <h6 class="card-subtitle mb-2 text-muted">Due Date: ${array.dueDate}</h6>
                    <p class="card-text">Priority: ${array.taskPriority}</p>
                    <button type="button submit" class="btn btn-danger removeMe" id="taskDeleteBtn${array.id}"> Delete </button>
                    <button type="button submit" class="btn btn-success " id="taskDoneBtn${array.id}"> Done </button>
                  </div>
                </div>
              </div>
            </div>
          `;

  return oneCard;
}
