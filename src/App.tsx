import { nanoid } from "nanoid"
import { useEffect, useRef, useState } from "react"
import { createThousandTodos } from "./lib/util"
import { initialItems } from "./lib/data"
import TodoContextComponent from "./contexts/TodoContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

type TodoItem = {
  id: number
  title: string
  completed: boolean
}

function App() {
  return (
    <div className='app'>
      <TodoContextComponent>
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </TodoContextComponent>
    </div>
  )
}

export default App
