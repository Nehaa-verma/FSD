import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './student'
import UseStudentState from '../../UseStudentState.jsx'
import Imagemanipulation from './imagemanipulation.jsx'
function App() {
  const [count, setCount] = useState(0)
  const studentdata={
    college:"ABESEC",
    name:"abc",
    branch:"cse",
    roll:"123",
    section:"B"
  }
  return(
    <div>
      <Imagemanipulation/>
    </div>
  )
}

//   return (
//     <>
//       <Student data={studentdata}/>
//     </>
//   )
// }

export default App

