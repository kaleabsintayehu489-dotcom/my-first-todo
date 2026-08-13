import { tasks, saveTasks } from "../general/tasks.js";
import { updateTimeDate } from "../general/dateTime.js";

export function upComing() {

  const { date, time } = updateTimeDate();
  const mainPage = document.querySelector(".js-main-body");

  if (!mainPage) return;

  mainPage.innerHTML = `
        <div class="page-heading">
            <div>
                <h1>Upcoming Tasks</h1>
                <p>
                Tasks you need to complete in the future.
                </p>
            </div>

            <div>
                <p class="all-task-date">
                ${date} ${time}
                </p>
            </div>
        </div>

        <div class="upcoming-tasks-container"></div>
    `;

  renderUpcomingTasks();
}

function renderUpcomingTasks() {
  const container = document.querySelector(".upcoming-tasks-container");

  if (!container) return;

  container.innerHTML = "";

  const today = new Date().toISOString().split("T")[0];

  const upcomingTasks = tasks.filter((task) => {
    return !task.completed && task.date > today;
  });

  if (upcomingTasks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
            <h2> No upcoming tasks</h2>
            <p>
            You don't have anything planned for the future.
            </p>
      </div>
    `;

    return;
  }

  upcomingTasks.forEach((task) => {
    const taskElement = document.createElement("div");

    taskElement.classList.add("task");

    taskElement.dataset.id = task.id;

    taskElement.innerHTML = `
      <button
        type="button"
        class="task-check"
        aria-label="Complete task"
      ></button>

      <span class="task-value">
        ${task.text}
      </span>

      <span class="task-date">
        ${task.date}
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
