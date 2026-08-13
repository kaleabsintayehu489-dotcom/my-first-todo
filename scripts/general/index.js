import { sideBar } from "../sideBar/sideBar.js";
import { all } from "../components/allTasks.js";
import { tasks, saveTasks } from "./tasks.js";
import { todayPage } from "../components/todayTasks.js";
import { upComing } from "../components/upComingTasks.js";
import { updateTimeDate } from "./dateTime.js";
import { addTask } from "../components/addTasks.js";

import { completed } from "../components/completedTasks.js";

sideBar();
todayPage();
numberTasks();
completedTasks();

updateTimeDate();
setInterval(updateTimeDate, 1000);

const allButton = document.querySelector(".js-all");

allButton.addEventListener("click", () => {
  all();
});

const today = document.querySelector(".js-today");

today.addEventListener("click", () => {
  todayPage();
});

const upComingButton = document.querySelector(".js-up-coming");

upComingButton.addEventListener("click", () => {
  upComing();
});

const completedButton = document.querySelector(".js-Completed");

completedButton.addEventListener("click", () => {
  completed();
});


document.addEventListener("click", (event) => {
  if (event.target.closest(".add-button")) {
    addTask();
  }
});


document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    event.target.classList.contains("input-add-task")
  ) {
    addTask();
  }
});


export function numberTasks() {
  const numberOfTasks = document.querySelector(".number-tasks");
  const totalNumberTasks = document.querySelector(".total-number-tasks");

  if (!numberOfTasks) {
    return 0;
  }

  const activeTasks = tasks.filter((task) => !task.completed);

  const number = activeTasks.length;

  numberOfTasks.textContent = `${number} ${number === 1 ? "Task" : "Tasks"}`;

  if (totalNumberTasks) {
    totalNumberTasks.textContent = `${tasks.length} ${tasks.length === 1 ? "Task" : "Tasks"}`;
  }

  return number;
}


export function completedTasks() {
  const completedTasknumber = document.querySelector(".completed-tasks");

  const completedTaskPercent = document.querySelector(".completed-percent");

  const progressBar = document.querySelector(".progress-bar");

  const totalNumberTasks = document.querySelector(".total-number-tasks");

  if (!completedTasknumber || !completedTaskPercent || !progressBar) {
    return;
  }

  const completed = tasks.filter((task) => task.completed).length;

  const totalTasks = tasks.length;

  completedTasknumber.textContent = `${completed} ${completed === 1 ? "Task" : "Tasks"}`;

  if (totalTasks === 0) {
    completedTaskPercent.textContent = "0%";
    progressBar.style.width = "0%";

    if (totalNumberTasks) {
      totalNumberTasks.textContent = "0 Tasks";
    }
    return;
  }

  const percent = (completed / totalTasks) * 100;

  completedTaskPercent.textContent = `${Math.round(percent)}%`;

  progressBar.style.width = `${percent}%`;

  if (totalNumberTasks) {
    totalNumberTasks.textContent = `${totalTasks} ${totalTasks === 1 ? "Task" : "Tasks"}`;
  }
}

document.addEventListener("click", (event) => {
  const taskElement = event.target.closest(".task, .completed-task-list");

  if (!taskElement) {
    return;
  }

  const taskId = Number(taskElement.dataset.id);

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    console.log("Task not found:", taskId);
    return;
  }

  if (event.target.classList.contains("task-delete")) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return;
    }

    tasks.splice(taskIndex, 1);

    saveTasks();

    refreshCurrentPage();

    return;
  }

  if (event.target.classList.contains("task-check")) {
    task.completed = !task.completed;

    saveTasks();

    refreshCurrentPage();

    return;
  }
});

function refreshCurrentPage() {
  if (document.querySelector(".upcoming-tasks-container")) {
    upComing();
    return;
  }

  if (document.querySelector(".completed-tasks-container")) {
    completed();
    return;
  }

  if (document.querySelector(".all-tasks-container")) {
    all();
    return;
  }

  if (document.querySelector(".todays-page")) {
    todayPage();
    return;
  }
}
