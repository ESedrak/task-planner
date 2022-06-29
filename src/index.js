// addTask

const taskName = document.querySelector("#taskHeader");
const taskDescription = document.querySelector("#taskText");
const taskAssign = document.querySelector("#taskAssign");
const dueDate = document.querySelector("#dueDate");
const taskPriority = document.querySelector("#taskPriority");
const taskStatus = document.querySelector("#taskStatus");
const submitTaskFormBtn = document.querySelector("#submitTaskFormBtn");

// Error spans
const taskHeaderError = document.querySelector("#taskHeaderError");
const taskDescriptionError = document.querySelector("#taskDescriptionError");
const taskAssignError = document.querySelector("#taskAssignError");
const dueDateError = document.querySelector("#dueDateError");
const taskPriorityError = document.querySelector("#taskPriorityError");
const taskStatusError = document.querySelector("#taskStatusError");

const validateTaskForm = () => {
  if (taskName.value === "") {
    taskHeaderError.innerText = "Please add a task name.";
  } else if (taskName.value.length < 8) {
    taskHeaderError.innerText =
      "Task name needs to be longer than 8 characters.";
  }
  if (taskDescription.value === "") {
    taskDescriptionError.innerText = "Please add a task description.";
  } else if (taskDescription.value.length < 15) {
    taskDescriptionError.innerText =
      "Task Description needs to be longer than 15 characters.";
  }
  if (taskAssign.value === "") {
    taskAssignError.innerText = "Please assign a name.";
  } else if (taskAssign.value.length < 8) {
    taskAssignError.innerText = "Name needs to be longer than 8 characters.";
  }
  if (dueDate.value === "") {
    dueDateError.innerText = "Please assign a date.";
  }
  if ((taskPriority.value = "default")) {
    taskPriorityError.innerText = "Please choose priority level.";
  }
  if ((taskStatus.value = "default")) {
    taskStatusError.innerText = "Please choose task status.";
  }
};

submitTaskFormBtn.addEventListener("click", validateTaskForm);

// showCurrentTime/Date
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Creates interval
const interval = setInterval(() => {
  // Get current time
  const now = new Date();

  // Format date as in mm/dd/aaaa hh:ii:ss
  const dateTime =
    zeroFill(now.getUTCDate()) +
    "/" +
    zeroFill(now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  // Display the date and time on the screen using div#date-time
  document.getElementById("date-time").innerHTML = dateTime;
}, 1000);
