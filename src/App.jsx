import ExpenseForm from "./Components/ExpenseForm"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <div className=" main h-dvh w-full flex flex-col"style={{ fontFamily: 'Nerko One' }}>
        <Navbar/>
        <ExpenseForm/>
      </div>
    </>
  )
}

export default App
