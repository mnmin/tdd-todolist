class TodoList {
  constructor() {
    this.nextItemId = 1 // This is the id that will be used when creating a new Todo
    this.items = [] // This is a possible way to store all the Todos
    this.incompleteTodos = []
  }

  create(description) {
    // this function creates a new todo item with the given description
    // it adds it to the todoList
    // returns the item that was created

    // The following is the new Todo being created
    const newItem = {
      id: this.nextItemId++, // The id is the one initially set to 1 above
      //   it is automatically incremented to the next value (2, 3, etc)
      textDescription: description,
      isComplete: false
    }

    // add item to this.items (save it in the list)
    this.items.push(newItem)
    return newItem
  }

  getAllTodos() {
    return this.items
  }

  setComplete(id) {
    // find the todo with the matching ID
    // if we find the ID we need to set "if complete" to true for that ID
    // find method on array
    const itemToComplete = this.items.find((item) => item.id === id)
    if (itemToComplete !== undefined) {
      itemToComplete.isComplete = true
    }
    return itemToComplete
  }

  setIncomplete(id) {
    // new tests for set complete methods (second test unsuccessful)
    // itemToComplete.isComplete =
    const itemToComplete = this.items.find((item) => item.id === id)
    if (itemToComplete !== undefined) {
      itemToComplete.isComplete = false
    }
    return itemToComplete
  }

  getCompletedTodos() {
    // use filter array method

    const completeToDos = this.items.filter((item) => item.isComplete)
    return completeToDos
  }

  getincompleteTodos() {
    // an array containing all of the items that are incomplete
    const incompletedTodos = this.items.filter(
      (item) => item.isComplete === false
    )
    return incompletedTodos
  }

  getOnlyCompletedItems() {
    const completedTodos = this.items.filter((item) => item.isComplete === true)
    return completedTodos
  }

  search(itemID) {
    const item = this.items.find((item) => item.id === itemID)
    if (item !== undefined) {
      return item
    } else {
      return 'item not found'
    }
  }

  removeItemByID() {
    
  }

  pop(itemID) {
    const item = this.item.find((item) => item.id === itemID)
    if (item !== undefined) {
      this.items.pop()
      return item
    }
  }
}

module.exports = TodoList
