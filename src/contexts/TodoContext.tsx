// @ts-nocheck

import React, { createContext, useEffect, useRef, useState } from "react"
import { initialItems } from "../lib/data"
import { createThousandTodos } from "../lib/util"
import { TContext, TodoItem } from "../types/types"

type Props = {
  children: React.ReactNode
}

export const TodoContext = createContext<TContext>()

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
    const newItems = items.map((item: TodoItem) => ({
      ...item,
      completed: true,
    }))
    setItems(newItems)
  }

  const listEmpty = items.length === 0
  const todoCount = items.length
  const itemsCompleted = items.filter((item: TodoItem) => item.completed).length

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

  const handleToggleItem = (id: string) => {
    const newItems = items.map((item: TodoItem) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setItems(newItems)
  }

  const handleDeleteItem = (id: string) => {
    const newItems = items.filter((item: TodoItem) => item.id !== id)
    setItems(newItems)
  }

  const inputRef = useRef<HTMLInputElement>(null)

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
        inputRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
