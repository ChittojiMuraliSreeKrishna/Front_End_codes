const todoInput = document.querySelector('#todo-input')
const todoButton = document.querySelector('.todo-btn')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

function addTodo(event) {
  event.preventDefault()
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  const litodo = document.createElement('li')
  litodo.innerText = todoInput.value
  litodo.classList.add('todo-item')
  todoDiv.appendChild(litodo)
  const comButton = document.createElement('button')
  comButton.innerText = '[#]'
  comButton.classList.add('complete-button')
  todoDiv.appendChild(comButton)
  const delButton = document.createElement('button')
  delButton.innerText = '[x]'
  delButton.classList.add('trash-button')
  todoDiv.appendChild(delButton)
  todoList.appendChild(todoDiv)
  todoInput.value = ''
}

function deleteCheck(e) {
  const item = e.target

  if (item.classList[0] === 'trash-button') {
    const todo = item.parentElement
    todo.remove()
  } else if (item.classList[0] === 'complete-button') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
}
