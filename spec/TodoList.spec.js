const TodoList = require('../src/TodoList.js')

describe('TodoList', () => {
  it('creates a todo item', () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      textDescription: 'buy sugar',
      isComplete: false
    }
    // execute
    const result = todoList.create('buy sugar')
    // verify
    expect(result).toEqual(expected)
  })
  it('Get all todo items', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy eggs')
    todoList.create('buy milk!')
    const expected = [
      {
        id: 1,
        textDescription: 'buy eggs',
        isComplete: false
      },
      {
        id: 2,
        textDescription: 'buy milk!',
        isComplete: false
      }
    ]

    // execute
    const result = todoList.getAllTodos()
    // verify
    expect(result).toEqual(expected)
  })
  it('Set a todo completed by its ID', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy stake')
    todoList.create('buy coffee')
    todoList.setComplete(2)
    const expected = [
      {
        id: 2,
        textDescription: 'buy coffee',
        isComplete: true
      }
    ]

    // execute
    const result = todoList.getCompletedTodos()
    // verify
    expect(result).toEqual(expected)
  })
  it('Get only todo items that are incomplete', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy carrots')
    todoList.create('buy onions')
    todoList.setComplete(2)
    // execute
    const result = todoList.getincompleteTodos()
    // verify
    const expectedArrayOfIncompleteTodos = [
      {
        id: 1,
        textDescription: 'buy carrots',
        isComplete: false
      }
    ]
    expect(result).toEqual(expectedArrayOfIncompleteTodos)
  })
  it('Get only todo items that are complete', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy ginger')
    todoList.create('buy tea')
    todoList.setComplete(1)
    // execute
    const result = todoList.getOnlyCompletedItems()
    // verify
    const expectedArrayOfCompletedItems = [
      {
        id: 1,
        textDescription: 'buy ginger',
        isComplete: true
      }
    ]
    expect(result).toEqual(expectedArrayOfCompletedItems)
  })
  it('Find existing todoItem by ID', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy ginger')
    todoList.create('buy tea')
    // execute
    const result = todoList.search(2)
    // verify
    const expectedResult = {
      id: 2,
      textDescription: 'buy tea',
      isComplete: false
    }

    expect(result).toEqual(expectedResult)
  })
  it('Not find inexistent todoItem by ID', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy ginger')
    todoList.create('buy tea')
    // execute
    const result = todoList.search(3)
    // verify
    expect(result).toEqual('item not found')
  })
  it('Remove a todo item by its ID', () => {
    // set up
    const todoList = new TodoList()
    todoList.create('buy ginger')
    // execute
    const result = todoList.shift(1)
    // verify
    const removedItem = {
      id: 1,
      textDescription: 'buy ginger',
      isComplete: false
    }

    expect(result).toEqual('removedItem')
  })
})
