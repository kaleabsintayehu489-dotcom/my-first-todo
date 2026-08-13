export function sideBar() {
  const html = `
  
      <div class="side-bars">

          <div class="logo">
            <h1> To-do</h1>
          </div>

          <div class="nav">
              <h2> Menu</h2>
            
              <ul class="main-menu">
                  <li class="js-today">     
                      <button class="nav-button">
                          <span class="icon">
                              <img src="./assets/images/home.svg" alt="">
                            </span>
                          <span >Today</span>
                      </button> 
                  </li>
                  <li class="js-all">         
                      <button class="nav-button">
                          <span class="icon">
                              <img src="./assets/images/list.svg" alt="">
                            </span>
                          <span>All Tasks</span>
                      </button> 
                  </li>

                  <li class="js-up-coming">
                      <button class="nav-button">
                          <span class="icon">
                              <img src="./assets/images/schedule.svg" alt="">
                            </span>
                          <span>Up coming</span>
                      </button> 
                  </li>

                  <li class="js-Completed">  
                      <button class="nav-button">
                          <span class="icon">
                              <img src="./assets/images/calendar_check.svg" alt="">
                            </span>
                          <span >Completed</span>
                      </button> 
                  </li>
              </ul>        
          </div>
      </div>  
    `;

  document.querySelector(".js-side-bars").innerHTML = html;
}
