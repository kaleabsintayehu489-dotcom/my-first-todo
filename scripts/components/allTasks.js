import { tasks,saveTasks} from "../general/tasks.js";
import { updateTimeDate } from "../general/dateTime.js";



export function all() {
  
 const {date, time ,greeting} = updateTimeDate();
  const mainPage = document.querySelector(".js-main-body");
   if (!mainPage) return;

  mainPage.innerHTML = `
    <div class="page-heading">
      <div>
        <h1>All Tasks</h1>
        <p>View and manage all your tasks.</p>
      </div>

      <div>
        <p class="all-task-date"> ${date} ${time}</p>   
      </div>
    </div>

    <div class="all-tasks-container"></div>

    `

     renderAllTasks();

}



function renderAllTasks() {
  const container = document.querySelector(".all-tasks-container");

 

  if (!container) return;

  container.innerHTML = "";


  if (tasks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h2> No tasks yet</h2>
        <p>Add a task from the Today page.</p>
      </div>
    `;

    return;
  }

   const activeTasks = tasks.filter((task) => !task.completed);

activeTasks.forEach((task) => {


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
        ${task.completed ? "Completed: " : ""}
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


