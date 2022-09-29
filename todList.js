export class TodoList {
  todos = []
  id = 1

  add(value, completed) {
    this.todos.push({ value, completed, id: this.id })
    this.id += 1
  }

  deleteOne(id) {
    const copyTodos = this.todos.slice()
    const index = copyTodos.findIndex(todo => todo.id === id)
    if (index < 0) {
      return
    }
    copyTodos.splice(index, 1)
    this.todos = copyTodos
  }

  
  filterByActive() {
    const filteredTodos = this.todos.filter(todo => !todo.completed)
    return filteredTodos
  }

  clearCompleted() {
    const filteredTodos = this.todos.filter(todo => !todo.completed)
    this.todos = filteredTodos
  }
  
  filterByCompleted() {
    const filteredTodos = this.todos.filter(todo => todo.completed)
    return filteredTodos
  }

  updateOne(id, completed){
    
    const copyTodos = this.todos.slice()
    const index = copyTodos.findIndex(todo => todo.id === id)
    if (index < 0) {
      return
    }
    const item = copyTodos[index] 
    item.completed = completed
    copyTodos[index] = item
    this.todos = copyTodos
  }

  getAll() {
    return this.todos
  }

}