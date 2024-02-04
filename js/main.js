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
  taskName.innerHTML = input.value.trim();
  input.value = "";
  generateNewTask();
}

function generateNewTask() {
  const newTask = $.createElement("div");
  newTask.innerHTML = `
    <span class="mt-2">
      ${input.value.trim()}
    </span>
    <div class="ml-auto">
      <button id="edit-btn" class="bg-green-500 p-2 rounded-lg">Edit</button>
      <button id="delete-btn" class="bg-red-500 p-2 rounded-lg">Delete</button>
    </div>
  `;
  
  taskContainer.insertAdjacentElement("beforeend", newTask);
}
addBtn.addEventListener("click", addTask);
newTasknewTaskgenerateNewTasknewTasknewTask