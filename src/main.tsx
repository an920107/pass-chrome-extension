import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center'>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  )
}