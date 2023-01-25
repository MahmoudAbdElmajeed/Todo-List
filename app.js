//selectors
const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
//event listeners
todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", checkOrDelete);
//functions
function addTask(e) {
  e.preventDefault(); //to prevnt the form from submitting
  console.log(todoInput.value);

  //creat Li
  const todoli = document.createElement("li");
  todoli.classList.add("todo");
  //creat div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo-item");
  //add input value to div
  tododiv.innerText = todoInput.value;
  //creat complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  //creat trash button
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  //add div +button1+button2 to --> Li
  todoli.appendChild(tododiv);
  todoli.appendChild(completeBtn);
  todoli.appendChild(trashBtn);
  //add Li to --> UL
  todoList.appendChild(todoli);
  //remove input value
  todoInput.value = "";
}

function checkOrDelete(e) {
  const item = e.target;

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");

    // const todo = item.parentElement;
    // todo.classList.toggel("completed");
  }
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}
