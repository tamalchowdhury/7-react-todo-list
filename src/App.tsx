import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
const initialItems = [
  { id: 1716479885471, title: "make bed", completed: false },
  { id: 1716479885472, title: "eat breakfast", completed: false },
  { id: 1716479885473, title: "start coding", completed: false },
]

type TodoItem = {
  id: number
  title: string
  completed: boolean
}

function App() {
  const [items, setItems] = useState<TodoItem[]>(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  )

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  const handleAddItem = (item: TodoItem) => {
    setItems([...items, item])
  }

  const handleToggleItem = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setItems(newItems)
  }

  const handleDeleteItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const todo = e.target.todo.value
    if (!todo) return

    const todoItem = {
      id: nanoid(),
      title: todo,
      completed: false,
    }

    handleAddItem(todoItem)
    e.target.reset()
  }

  const deleteAllTodo = () => {
    setItems([])
  }

  const resetAllTodo = () => {
    setItems(initialItems)
  }

  const markAllComplete = () => {
    const newItems = items.map((item) => ({ ...item, completed: true }))
    setItems(newItems)
  }

  return (
    <div className='app'>
      <header className='header'>ToDo List</header>

      <main className='main'>
        <h2>todo list items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              <input
                type='checkbox'
                name={item.title}
                id={item.title}
                checked={item.completed}
                onChange={() => handleToggleItem(item.id)}
              />
              <label htmlFor={item.title}>{item.title}</label>{" "}
              <button onClick={() => handleDeleteItem(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </main>

      <aside className='sidebar'>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='todo'>Add Todo Item</label>
          <input name='todo' required />
          <button type='submit'>Add Todo</button>
        </form>

        <button onClick={resetAllTodo} type='button'>
          Reset All Todo
        </button>
        <button onClick={deleteAllTodo} type='button'>
          Delete All Todo
        </button>
        <button onClick={markAllComplete} type='button'>
          Mark all Complete
        </button>
      </aside>

      <footer className='footer'>Footer goes here</footer>
    </div>
  )
}

export default App
