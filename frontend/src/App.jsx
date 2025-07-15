import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={"https://genero.ues.edu.sv/wp-content/uploads/sites/48/2024/02/cropped-Logo-UES-2-271x300.png"} alt="React logo" />
      </div>
      <h1>Fondo Circulante FIA-UES</h1>
    </>
  )
}

export default App
