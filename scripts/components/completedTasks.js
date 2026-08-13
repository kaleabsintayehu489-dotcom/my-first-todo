import { tasks,saveTasks } from "../general/tasks.js";
import { updateTimeDate } from "../general/dateTime.js";

export function completed(){

    const { date, time } = updateTimeDate();

  const mainPage = document.querySelector(".js-main-body");

  if (!mainPage) return;

  mainPage.innerHTML = `
    <div class="page-heading">
      <div>
        <h1>Completed Tasks</h1>
        <p>Here are the tasks you've completed.</p>
      </div>

      <div>
        <p class="all-task-date">
          ${date} ${time}
        </p>
      </div>
    </div>

    <div class="completed-tasks-container"></div>
  `;

  renderCompletedTasks();
}

export function renderCompletedTasks() {

  const container = document.querySelector(
    ".completed-tasks-container"
  );

  if (!container) return;

  container.innerHTML = "";

  // Only completed tasks
  const completedTasks = tasks.filter(
    (task) => task.completed
  );


  if (completedTasks.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <h2>No completed tasks</h2>
        <p>Complete a task and it will appear here.</p>
      </div>
    `;

    return;
  }


  completedTasks.forEach((task) => {

    const taskElement = document.createElement("div");

    taskElement.classList.add(
      "completed-task-list",
      "task-completed"
    );

    taskElement.dataset.id = task.id;


    taskElement.innerHTML = `
      <button
        type="button"
        class="task-check"
        aria-label="Uncomplete task"
      ></button>

      <span class="task-value">
        ${task.text}
      </span>

      <span class="task-date">
        Completed: ${task.date}
      </span>

      <span class="task-time">
        ${task.time}
      </span>

      <button class="task-delete">
        Delete
      </button>
    `;

    container.appendChild(taskElement);
  });
}


