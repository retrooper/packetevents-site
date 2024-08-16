import { useState } from 'react'
import packetEventsLogo from '/images/packetevents.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={packetEventsLogo} className="logo" alt="PacketEvents logo" />
        </a>
      </div>
      <h1>The Future of Minecraft Networking</h1>
      <h1 class="second_header" id="secondheader">PacketEvents</h1> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
