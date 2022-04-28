import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const message = "Hello Function Component!!"
  console.log("Render!!")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>
          <button type="button" 
            onClick={() => setCount((count) => count + 1)}>
            {/* if used like below it will error cause the react will render if it has a change. */}
            {/* So if used like below it will loop rendering */}
            {/* onClick={setCount((count) => count + 1)}> */}
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
