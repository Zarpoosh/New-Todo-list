const $ = document;

const input = $.querySelector("#input");
const addBtn = $.querySelector("#add-task");
// const editBtn = $.querySelector("#edit-btn");
// const deleteBtn = $.querySelector("#delete-btn");
// const taskName = $.querySelector("span");
const taskContainer = $.querySelector("#task-container");

//--------------------------------------------------------------------

function addTask(e) {
  generateNewTask();
}

function generateNewTask() {
  // console.log(input.value.trim());
  const newTask = $.createElement("div");
  newTask.innerHTML = `
  <div id="task" class="rounded-lg bg-gray-200 p-3 flex m-3 ">
    <span class="mt-2">
    ${input.value.trim()}
    </span>
    <div class="ml-auto">
      <button id="edit-btn" class=" bg-green-500 p-2 rounded-lg">Edit</button>
      <button id="delete-btn" class="  bg-red-500 p-2 rounded-lg">Delete</button>
    </div>
  </div>
  `;

  const deleteBtn = newTask.querySelector("#delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  input.value = "";
  taskContainer.insertAdjacentElement("beforeend", newTask);
}
function deleteTask(event) {
  const taskToDelete = event.target.closest("#task");
  taskToDelete.remove();
}

addBtn.addEventListener("click", addTask);
