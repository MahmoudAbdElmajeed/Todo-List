//selectors
const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
//event listeners
todoBtn.addEventListener("click", addTask);
//functions
function addTask(e) {
  e.preventDefault(); //to prevnt the form from submitting
  console.log(todoInput.value);
}

//creat Li
const todoli = document.createElement("li");
todoli.classList.add("todo-item");
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
completeBtn.innerHTML = '<i class="fas fa-trash"></i>';
//add div +button1+button2 to --> Li

//add Li to --> UL

//remove input value
