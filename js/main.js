const $ = document;

const input = $.querySelector("#input");
const addBtn = $.querySelector("#add-task");
const editBtn = $.querySelector("#edit-btn");
const deleteBtn = $.querySelector("#delete-btn");
const taskName = $.querySelector("span");
const taskContainer = $.querySelector("#task-container");

//--------------------------------------------------------------------

function addTask(e) {
//   console.log();
    taskName.innerHTML=input.value.trim()
    input.value=""
    generateNewTask()
}

function generateNewTask(){
    taskContainer.insertAdjacentHTML=`
    "beforeend" , 
    <span class="mt-2">
            react
          </span>
          <div class="ml-auto">
            <button id="edit-btn" class=" bg-green-500 p-2 rounded-lg ">Edit</button>
            <button id="delete-btn" class=" bg-red-500 p-2 rounded-lg ">Delete</button>
          </div>
    `
}
addBtn.addEventListener("click", addTask);
