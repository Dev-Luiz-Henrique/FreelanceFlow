import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp />
    </>
  )
}

export default App