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
    console.log(task)
    // Render task
    this.render(task)
    this.updateCache();
  }
  // Render the tasks
  render(task) {
    console.log("My Tasks: ", this.tasks)
      console.log("rendering: ", task)
      let oneTask = document.createElement("div");
      if (task.DOMrender === false) {
        console.log("Im firing")
        oneTask.innerHTML = createCard(task);
        document.body.appendChild(oneTask);
        console.log(task)
        task.DOMrender = !task.DOMrender;
        // Completed Task
        document
          .querySelector(`#taskDoneBtn${task.id}`)
          .addEventListener("click", () => {
            task.taskStatus = "complete";
            this.updateCache();
            document.querySelector("#completed").appendChild(oneTask);
            document
              .querySelector(`#taskDoneBtn${task.id}`)
              .setAttribute("hidden", "");
          });
        // To delete Task Card from DOM
        this.deleteTask(task.id);
      }
      // Sort into columns
      if ((task.taskStatus === "toDo")) {
        document.querySelector("#toDoList").appendChild(oneTask);
      } else if ((task.taskStatus === "inProgress")) {
        document.querySelector("#inProgress").appendChild(oneTask);
      } else if ((task.taskStatus === "review")) {
        document.querySelector("#review").appendChild(oneTask);
      } else if ((task.taskStatus === "complete")) {
        document.querySelector("#completed").appendChild(oneTask);
      }
    this.updateCache();
  }
  // Get All Tasks
  getTask() {
    const getAllTasks = this.tasks;
    return getAllTasks;
  }
  // Get Tasks By Status
  getTasksWithStatus(status) {
    const getTaskStatus = [];
    // test here
    for (let i = 0; i < this.getTask().length; i++) {
      const taskStatus = this.getTask()[i].taskStatus;
      if (taskStatus === "toDo") {
        document.querySelector("#toDoList").appendChild(oneTask);
      } else if (taskStatus === "inProgress") {
        document.querySelector("#inProgress").appendChild(oneTask);
      } else if (taskStatus === "review") {
        document.querySelector("#review").appendChild(oneTask);
      } else if (taskStatus === "complete") {
        document.querySelector("#completed").appendChild(oneTask);
      }
      console.log(taskStatus);
      getTaskStatus.push(taskStatus);
    }
    return getTaskStatus;
  }
  //Delete Task!
  deleteTask(id) {
    console.log(id);
    document
      .querySelector(`#taskDeleteBtn${id}`)
      .addEventListener("click", () => {
        document.querySelector(`#card${id}`).remove();
        this.tasks.splice(id, 1);
        console.log(this.tasks);
        // delete this.tasks[id];
        this.updateCache();
        // this.render();
      });
  }
  // Update localStorage with current array of tasks
  updateCache() {
    localStorage.setItem("storedTasks", JSON.stringify(this.tasks));
    console.log("Cache has been updated!");
    console.log(localStorage.getItem("storedTasks"));
  }
  getCache() {
    const tasksInStorage = localStorage.getItem("storedTasks");
    if (tasksInStorage) {
      const myTask = JSON.parse(tasksInStorage);
      myTask.forEach((task) => {
        this.addTask(
          task.taskName,
          task.taskDescription,
          task.taskAssign,
          task.dueDate,
          task.taskPriority,
          task.taskStatus
        );
      });
    }
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