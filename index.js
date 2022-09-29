import { TodoList } from "./todList.js"

const todoList = new TodoList()

const buttonAll = document.querySelector('.all')
const buttonActive = document.querySelector('.active')
const buttonCompleted = document.querySelector('.completed')
const buttonClear = document.querySelector('.clear')

const buttonAllT = document.querySelector('.allT')
const buttonActiveT = document.querySelector('.activeT')
const buttonCompletedT = document.querySelector('.completedT')
const buttonClearT = document.querySelector('.clearT')

const elementBody = document.querySelector('body')
const darkModeButton = document.querySelector('.dark')
const ligthModeButton = document.querySelector('.ligth')

const inputObjective = document.querySelector('#objective')

const formValues = document.querySelector('.form')
const ul = document.querySelector('#lista-li')



formValues.addEventListener('submit', function (event) {
  event.preventDefault()
  todoList.add(inputObjective.value, false)
  inputObjective.value = ""
  update()
})

function update() {
  removeAllRows()

  todoList.todos.forEach(todo => {
    const row = createRow()
    row.querySelector('.todoName').textContent = todo.value

    const checkbox = row.querySelector('#items')

    checkbox.onchange = () => {
      todoList.updateOne(todo.id, !todo.completed)
    }

    checkbox.checked = todo.completed

    row.querySelector('#remove').onclick = () => {
      const isOk = confirm(`Tem certeza que deseja deletar TODO?`)
      if (isOk) {
        todoList.deleteOne(todo.id)
        row.remove()
      }
    }
    ul.append(row)
  })
}

function createRow() {
  const li = document.createElement('li')
  li.innerHTML =
    ` 
    <input type="checkbox" name="todo" id="items">
    <label class="todoName" for="todo"></label>
    <button id="remove"><img src="./images/icon-cross.svg" alt=""></button>    
    `
  return li
}

function removeAllRows() {
  ul.querySelectorAll('li').forEach((li) => li.remove())
}

function active() {
  removeAllRows()

  todoList.filterByActive().forEach(todo => {
    const row = createRow()
    row.querySelector('.todoName').textContent = todo.value

    const checkbox = row.querySelector('#items')
    checkbox.onchange = () => {
      todoList.updateOne(todo.id, !todo.completed)
      row.remove()
      ul.append(row)
    }
    checkbox.checked = todo.completed


    row.querySelector('#remove').onclick = () => {
      const isOk = confirm(`Tem certeza que deseja deletar TODO?`)
      if (isOk) {
        todoList.deleteOne(todo.id)
        row.remove()
      }
    }
    ul.append(row)
  })
}

function completed() {
  removeAllRows()
  todoList.filterByCompleted().forEach(todo => {
    const row = createRow()
    row.querySelector('.todoName').textContent = todo.value
    const checkbox = row.querySelector('#items')
    checkbox.onchange = () => {
      todoList.updateOne(todo.id, !todo.completed)
      row.remove()
      ul.append(row)
    }
    checkbox.checked = todo.completed
    row.querySelector('#remove').onclick = () => {
      const isOk = confirm(`Tem certeza que deseja deletar TODO?`)
      if (isOk) {
        todoList.deleteOne(todo.id)
        row.remove()
      }item
    }
    ul.append(row)
  })
}

function clearCompleted() {
  removeAllRows()
  todoList.clearCompleted()

  todoList.todos.forEach(todo => {
    const row = createRow()
    row.querySelector('.todoName').textContent = todo.value
    row.querySelector('#remove').onclick = () => {
      const isOk = confirm(`Tem certeza que deseja deletar TODO?`)
      if (isOk) {
        todoList.deleteOne(todo.id)
        row.remove()
      }
    }
  })
}


buttonAll.addEventListener('click', update)
buttonAllT.addEventListener('click', update)

buttonActive.addEventListener('click', active)
buttonActiveT.addEventListener('click', active)

buttonCompleted.addEventListener('click', completed)
buttonCompletedT.addEventListener('click', completed)

buttonClear.addEventListener('click', clearCompleted)
buttonClearT.addEventListener('click', clearCompleted)



darkModeButton.addEventListener('click', function () {
  ligthModeButton.classList.remove('hide')
  darkModeButton.classList.add('hide')
  elementBody.classList.remove('dark')

})
ligthModeButton.addEventListener('click', function () {
  ligthModeButton.classList.add('hide')
  darkModeButton.classList.remove('hide')
  elementBody.classList.add('dark')
})

buttonAll.addEventListener('click', function () {
  buttonAll.classList.add("onfocus")
  buttonActive.classList.remove("onfocus")
  buttonCompleted.classList.remove("onfocus")
  buttonClear.classList.remove("onfocus")
})
buttonActive.addEventListener('click', function () {
  buttonActive.classList.add("onfocus")
  buttonAll.classList.remove("onfocus")
  buttonCompleted.classList.remove("onfocus")
  buttonClear.classList.remove("onfocus")

})
buttonCompleted.addEventListener('click', function () {
  buttonCompleted.classList.add("onfocus")
  buttonAll.classList.remove("onfocus")
  buttonActive.classList.remove("onfocus")
  buttonClear.classList.remove("onfocus")

})

buttonAllT.addEventListener('click', function () {
  buttonAllT.classList.add("onfocus")
  buttonActiveT.classList.remove("onfocus")
  buttonCompletedT.classList.remove("onfocus")
  buttonClearT.classList.remove("onfocus")

})
buttonActiveT.addEventListener('click', function () {
  buttonActiveT.classList.add("onfocus")
  buttonAllT.classList.remove("onfocus")
  buttonCompletedT.classList.remove("onfocus")
  buttonClearT.classList.remove("onfocus")

})
buttonCompletedT.addEventListener('click', function () {
  buttonCompletedT.classList.add("onfocus")
  buttonAllT.classList.remove("onfocus")
  buttonActiveT.classList.remove("onfocus")
  buttonClearT.classList.remove("onfocus")

})


