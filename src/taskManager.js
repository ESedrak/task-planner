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
      DOMrender: this.DOMrender
    };
    this.tasks.push(task);
  }

  render() {
    this.tasks.forEach((task) => {
      let z = document.createElement("div");
      if(task.DOMrender === false){
      z.innerHTML = createCard(task);
      document.body.appendChild(z);
      task.DOMrender = !task.DOMrender;
      // To delete Task Card from DOM
      document.querySelector(`#taskDeleteBtn${task.id}`)
      .addEventListener("click", () => {
        document.querySelector(`#card${task.id}`).remove();
        this.tasks.splice(task,1);
        console.log(this.tasks);
      });
    }

      if (taskStatus.value === "toDo") {
        document.querySelector("#toDoList").appendChild(z);
      } else if (taskStatus.value === "inProgress") {
        document.querySelector("#inProgress").appendChild(z);
      } else if (taskStatus.value === "review") {
        document.querySelector("#review").appendChild(z);
      } else if ((taskStatus.value = "complete")) {
        document.querySelector("#completed").appendChild(z);
      }
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
                    <button type="button submit" class="btn btn-primary " id="taskEditBtn${array.id}"> Edit </button>
                    <button type="button submit" class="btn btn-success " id="taskDoneBtn${array.id}"> Done </button>
                  </div>
                </div>
              </div>
            </div>
          `;

  return oneCard;
}
