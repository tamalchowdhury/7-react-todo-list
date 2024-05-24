export function createThousandTodos() {
  const todos = []
  for (let i = 0; i < 100; i++) {
    todos.push({
      id: `00${i}`,
      title: `Sample Todo Item To Go #${i}`,
      completed: false,
    })
  }
  return todos
}
