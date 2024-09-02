import ExpenseForm from "./Components/ExpenseForm"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <div className=" main bg-slate-600 w-full h-screen flex flex-col"style={{ fontFamily: 'Nerko One' }}>
        <Navbar/>
        <ExpenseForm/>
      </div>
    </>
  )
}

export default App
