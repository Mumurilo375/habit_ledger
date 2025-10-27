import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center gap-12 my-10">
        <a href="https://vite.dev" target="_blank" className="inline-block" aria-label="Vite website">
          <img src={viteLogo} className="h-24 w-24 logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block" aria-label="React website">
          <img src={reactLogo} className="h-24 w-24 logo react" alt="React logo" />
        </a>
      </div>
      {/*<h1 className="text-3xl font-bold text-blue-600">Hello Tailwind v4</h1>*/}
      <h1 className="text-center">Vite + React</h1>
      <div className="card">
        <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
