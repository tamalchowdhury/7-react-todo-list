import { nanoid } from "nanoid"
import { useRef } from "react"

import { useTodoContext } from "../hooks/hooks"

export default function Sidebar() {
  const {
    handleAddItem,
    resetAllTodo,
    deleteAllTodo,
    markAllComplete,
    handleAddThousandTodos,
    inputRef,
  } = useTodoContext()

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
  return (
    <aside className='sidebar'>
      <form className='add__todo__block' onSubmit={handleFormSubmit}>
        <label className='add__todo__title' htmlFor='todo'>
          Add Todo Item
        </label>
        <input
          ref={inputRef}
          className='todo__input'
          name='todo'
          placeholder='Pack bags..'
          required
        />
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
        <button className='btn' onClick={handleAddThousandTodos} type='button'>
          Load 100 Sample Todos
        </button>
      </div>
    </aside>
  )
}
