import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  const list = new Array(10).fill(<li>Test</li>)

  return (
    <div id="App">
      <ul>{ list }</ul>
    </div>
  )
}
