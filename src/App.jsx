import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  console.log(process.env.NODE_ENV)
  const BASE_URL =
    process.env.NODE_ENV === 'production' ? '/' : '//localhost:3030/'

  const getMessage = async () => {
    try {
      const response = await fetch(BASE_URL + 'message')

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.text()
      setMessage(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <h1>{message}</h1>
      <div className='card'>
        <button onClick={getMessage}>Get message from backend</button>
      </div>
    </>
  )
}

export default App
