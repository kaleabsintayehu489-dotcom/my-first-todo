import { updateTimeDate } from "../general/dateTime.js";
import { tasks, saveTasks } from "../general/tasks.js";
import { numberTasks, completedTasks } from "../general/index.js";
const {date, time ,greeting} = updateTimeDate(); 




export function todayPage(){

      const pageHeader = document.querySelector(".js-main-body");
    
      pageHeader.innerHTML = `
        <div class="greeting">
           <p class="current-date"> ${date} </p>
            <h1>${greeting}  </h1>
            <p> What do you want to accomplish today?</p>
        </div> 

         <div class="todays-page">


            <div  class="progress">
                <p>Today's progress</p>
             <div> 

            </div>

            

            <div class="task-number">

                <div class ="manage-tasks">
                     <div>
                         <p>
                         Completed Tasks
                        </p>

                        <p class="completed-tasks"> </p>
                      </div>

                      <div>
                                <p>
                        Active Tasks
                        </p>
                                <p class="number-tasks"> </p>
                      </div>

                      <div>
                                <p>
                        Total Tasks
                        </p>

                         <p class="total-number-tasks"> </p>
                        
                      </div>
                  
                </div>    

                <p class="completed-percent"> </p>

            </div>


            <div class="progress-bar-container">
                      <div class="progress-bar"></div>
            </div>

            <p>
            Kepp going! You're doing great 
            </p>


        </div>

     <div class="new-task"> 

    <span class="input-task">
        <input 
            class="input-add-task" 
            placeholder="Add a new task..."
        >
    </span>

    <span class="input-date">
        <input 
            type="date" 
            class="input-task-date"
        >
    </span>

    <span class="add-button">
        <button>Add task</button>
    </span>

</div>

        <div class="task-list">
            <div class="task-list-heading">
                <h2>Today's tasks </h2>
                <p>Stay focused and get things done. </p>
            </div>


            <div class="task-list-button">
             <button>
                All
                </button>
                <button>
                Active
                </button>
                <button>
                Completed
                </button>
            </div>
         </div>

         <div class="task-area">

            <div class="tasksContainer">

            </div>

            <div class="completedTasksContainer">

            </div>

         </div>


    </div>
      `;

      const dateInput = document.querySelector(".input-task-date");

if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
}

renderTodayTasks();
numberTasks();
completedTasks();

}

function renderTodayTasks() {

  const container = document.querySelector(".tasksContainer");

  if (!container) return;

  container.innerHTML = "";

  const today = new Date().toISOString().split("T")[0];

  const todayTasks = tasks.filter(task => {
    return !task.completed && task.date === today;
  });

  todayTasks.forEach(task => {

    const taskElement = document.createElement("div");

    taskElement.classList.add("task");

    taskElement.dataset.id = task.id;

    taskElement.innerHTML = `
      <button 
        type="button" 
        class="task-check"
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


