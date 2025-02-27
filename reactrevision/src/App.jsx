import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Book ISBN="10" title="DBMS" price="500" author="Korth"></Book>
      <Book ISBN="10" title="DBMS" price="500" author="Korth"></Book>
      <Book ISBN="10" title="DBMS" price="500" author="Korth"></Book>
      <Book ISBN="10" title="DBMS" price="500" author="Korth"></Book>
    </>
  )
}

export default App
