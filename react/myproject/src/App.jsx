import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './student'
function App() {
  const [count, setCount] = useState(0)
  const studentdata={
    college:"ABESEC",
    name:"abc",
    branch:"cse",
    roll:"123",
    section:"B"
  }

  return (
    <>

    
      <Student data={studentdata}/>
    </>
  )
}

export default App