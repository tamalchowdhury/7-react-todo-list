import { nanoid } from "nanoid"
import { useEffect, useRef, useState } from "react"
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

  const inputRef = useRef<HTMLInputElement>(null)

  const listEmpty = items.length === 0

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
      <header className='header'>My ToDo List</header>

      <main className='main'>
        {listEmpty ? (
          <div className='empty__div'>
            <h2>No Todo Items</h2>
            <p>
              Start by{" "}
              <a href='#' onClick={() => inputRef.current?.select()}>
                adding one
              </a>
            </p>
          </div>
        ) : (
          <>
            <h2 className='main__header'>Your Todo Items</h2>
            <ul className='todos'>
              {items.map((item, index) => (
                <li key={item.id} className='todo'>
                  <div className='todo__labels'>
                    <input
                      className='todo__checkbox'
                      type='checkbox'
                      name={item.title}
                      id={item.title}
                      checked={item.completed}
                      onChange={() => handleToggleItem(item.id)}
                    />
                    <label htmlFor={item.title}>{item.title}</label>{" "}
                  </div>
                  <button
                    className='todo__cross'
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>

      <aside className='sidebar'>
        <form className='add__todo__block' onSubmit={handleFormSubmit}>
          <label className='add__todo__title' htmlFor='todo'>
            Add Todo Item
          </label>
          <input ref={inputRef} className='todo__input' name='todo' required />
          <button className='btn todo__button' type='submit'>
            Add Todo
          </button>
        </form>

        <div className='button__group'>
          <button className='btn' onClick={resetAllTodo} type='button'>
            Reset All Todos
          </button>
          <button className='btn' onClick={deleteAllTodo} type='button'>
            Delete All Todos
          </button>
          <button className='btn' onClick={markAllComplete} type='button'>
            Mark all Complete
          </button>
        </div>
      </aside>

      <footer className='footer'>Footer goes here</footer>
    </div>
  )
}

export default App
