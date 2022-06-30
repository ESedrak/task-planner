// addTask Form
const taskName = document.querySelector("#taskName");
const taskDescription = document.querySelector("#taskText");
const taskAssign = document.querySelector("#taskAssign");
const dueDate = document.querySelector("#dueDate");
const taskPriority = document.querySelector("#taskPriority");
const taskStatus = document.querySelector("#taskStatus");
const submitTaskFormBtn = document.querySelector("#submitTaskFormBtn");

// Error spans
const taskNameError = document.querySelector("#taskNameError");
const taskDescriptionError = document.querySelector("#taskDescriptionError");
const taskAssignError = document.querySelector("#taskAssignError");
const dueDateError = document.querySelector("#dueDateError");

const validateTaskForm = () => {
  if (taskName.value === "") {
    taskNameError.innerText = "Please add a task name.";
  } else if (taskName.value.length < 8) {
    taskNameError.innerText = "Task name needs to be longer than 8 characters.";
  } else if (taskDescription.value === "") {
    taskDescriptionError.innerText = "Please add a task description.";
  } else if (taskDescription.value.length < 15) {
    taskDescriptionError.innerText =
      "Task Description needs to be longer than 15 characters.";
  } else if (taskAssign.value === "") {
    taskAssignError.innerText = "Please assign a name.";
  } else if (taskAssign.value.length < 8) {
    taskAssignError.innerText = "Name needs to be longer than 8 characters.";
  } else if (dueDate.value === "") {
    dueDateError.innerText = "Please assign a date.";
  } else {
    // reset everything once submitted successfully
    taskName.value = "";
    taskDescription.value = "";
    taskAssign.value = "";
    dueDate.value = "";
    taskPriority.value = "low";
    taskStatus.value = "toDo";

    taskNameError.innerText = "";
    taskDescriptionError.innerText = "";
    taskAssignError.innerText = "";
    dueDateError.innerText = "";
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

  // Format date as in dd//aaaa hh:ii:ss
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
