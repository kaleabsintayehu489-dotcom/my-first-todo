import { all } from "./allTasks.js";
import { updateTimeDate } from "../general/dateTime.js";
import { tasks, saveTasks } from "../general/tasks.js";
import { todayPage } from "./todayTasks.js";
import { numberTasks, completedTasks } from "../general/index.js";


export function addTask(){
     const tasksContainer = document.querySelector(".tasksContainer");
 const input = document.querySelector(".input-add-task");


const dateInput = document.querySelector(".input-task-date");


  if (!input || !tasksContainer) {
    console.log("Task input or task container not found.");
    return;
  }

 const taskValue = input.value.trim();
const taskDate = dateInput.value;

   if (taskValue === "") {
     return;
   }
  

const {date, time ,greeting} = updateTimeDate();

const newTask = {
  id: Date.now(),
  text: taskValue,
  completed: false,
  date: taskDate,
  time: time
};

 tasks.push(newTask);
 saveTasks();

   const task = document.createElement("div");

  ;

   task.classList.add("task");

   task.dataset.id = newTask.id;

   task.innerHTML = `
          <button type="button" class="task-check"></button>
       <span class="task-value">${taskValue}</span> 
       <span class="task-date"> ${taskDate}</span>
       <span class="task-time"> ${time}</span>
       <button class="task-delete"> Delete </button>
     `;

   tasksContainer.appendChild(task);


     numberTasks();
  completedTasks();

  input.value = "";
 
  

 }


