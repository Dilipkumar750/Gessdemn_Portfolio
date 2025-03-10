import React, { useState } from 'react'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

   <div>
        <Navbar/>
        <Home/>
        <Footer/>
    
   </div>
  )
}

export default App
