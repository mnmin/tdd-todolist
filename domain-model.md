// Add your domain model below
TodoList (class/)

PROPERTIES
- items: Array of TodoItem
- nextItemId: (integer, starts at 0)

METHODS
- create(textDescriptoon: String) returns created TodoItem
- getAllTodos() => Array of TodoItems in TodoList
- getCompletedTodos() => Array of TodoItem in TodoList where completed=true
- search(itemID: number) return todoItem; else if not found return 'not found' (string)
- remove(ItemID: number) return 

TodoItem (class or plain JS object)
PROPERTIES
- ID (iteger/number)
- textDescription (string)
- isComplete (boolean)