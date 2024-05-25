import { useTodoContext } from "../hooks/hooks"
import { SITE_TITLE } from "../lib/constants"

export default function Header() {
  const { todoCount, itemsCompleted } = useTodoContext()

  return (
    <header className='header'>
      <div className='logo'>{SITE_TITLE}</div>
      <div className='count'>
        {itemsCompleted} / {todoCount} Todo Items Completed
      </div>
    </header>
  )
}
