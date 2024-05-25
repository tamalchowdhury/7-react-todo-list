import { useTodoContext } from "../hooks/hooks"

export default function Main() {
  const { handleToggleItem, handleDeleteItem, listEmpty, items, inputRef } =
    useTodoContext()

  return (
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
            {items.map((item) => (
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
                  <label
                    className={item.completed ? "u-strike" : ""}
                    htmlFor={item.title}
                  >
                    {item.title}
                  </label>{" "}
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
  )
}
