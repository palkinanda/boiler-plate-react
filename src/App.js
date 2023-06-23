import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { MainHeading } from './style/components/Heading'

const App = () => {
  return (
    <div>
            <NavBar/>
          <Routes>
            <Route path='/' element={<MainHeading>Hello Dev's </MainHeading>} />
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
