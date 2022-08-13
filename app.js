// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)



// Function
function addTodo(event){
  //Prevent form from submitting
  event.preventDefault()
  //Todo DIV
  const todoDiv = document.createElement('div')
  todoDiv.classList.add("todo")
  //Create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  // CHECK MARK BUTTON
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton)
  // CHECK TRASH BUTTON
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add("trash-btn")
  todoDiv.appendChild(trashButton)
  // APPEND TO LIST 
  todoList.appendChild(todoDiv)
  // Clear Todo INPUT VALUE
  todoInput.value = ''
}



