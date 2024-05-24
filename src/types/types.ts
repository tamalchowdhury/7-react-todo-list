export type TodoItem = {
  id: string
  title: string
  completed: boolean
}

export type TContext = {
  todoCount: number
  itemsCompleted: number
  handleAddItem: (item: TodoItem) => void
  handleAddThousandTodos: () => void
  handleDeleteItem: (id: string) => void
  handleToggleItem: (id: string) => void
  deleteAllTodo: () => void
  resetAllTodo: () => void
  markAllComplete: () => void
  listEmpty: boolean
  items: TodoItem[]
  inputRef: React.RefObject<HTMLInputElement>
}
