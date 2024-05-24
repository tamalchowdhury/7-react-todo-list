import TodoContextComponent from "./contexts/TodoContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

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
