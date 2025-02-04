import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Chat from './pages/Chat'

const App = () => {
  

 

  return (
  <div>
    <Routes>
      <Route path="/" element={<Chat />} />

    </Routes>
  </div>
  )
}

export default App