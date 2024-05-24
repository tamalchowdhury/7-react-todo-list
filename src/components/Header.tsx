import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export default function Header() {
  const { todoCount, itemsCompleted } = useContext(TodoContext)

  return (
    <header className='header'>
      <div className='logo'>Super Powered ToDo List</div>
      <div className='count'>
        {itemsCompleted} / {todoCount} Todo Items Completed
      </div>
    </header>
  )
}
