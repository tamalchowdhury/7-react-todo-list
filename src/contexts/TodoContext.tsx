import React, { createContext, useEffect, useState } from "react"
import { initialItems } from "../lib/data"
import { createThousandTodos } from "../lib/util"

type Props = {
  children: React.ReactNode
}

export const TodoContext = createContext()

export default function TodoContextComponent({ children }: Props) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  )

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

  const listEmpty = items.length === 0
  const todoCount = items.length
  const itemsCompleted = items.filter((item) => item.completed).length

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  const handleAddItem = (item: TodoItem) => {
    setItems([...items, item])
  }

  const handleAddThousandTodos = () => {
    const todoItems = createThousandTodos()
    setItems(todoItems)
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

  return (
    <TodoContext.Provider
      value={{
        todoCount,
        itemsCompleted,
        handleAddItem,
        handleAddThousandTodos,
        handleDeleteItem,
        handleToggleItem,
        deleteAllTodo,
        resetAllTodo,
        markAllComplete,
        listEmpty,
        items,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
