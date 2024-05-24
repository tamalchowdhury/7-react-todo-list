import { useTodoContext } from "../hooks/hooks"

export default function Header() {
  const { todoCount, itemsCompleted } = useTodoContext()

  return (
    <header className='header'>
      <div className='logo'>Super Powered ToDo List</div>
      <div className='count'>
        {itemsCompleted} / {todoCount} Todo Items Completed
      </div>
    </header>
  )
}
