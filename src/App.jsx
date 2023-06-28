import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { MainHeading } from './style/components/Heading'
import Error from './components/Error'
import Forgot from './components/Forgot'

const App = () => {
  return (
    <div>
            <NavBar/>
            <Forgot/>
          <Routes>
            <Route path='/' element={<MainHeading>Hello Dev's </MainHeading>} />
            <Route path='/home' element={<MainHeading>Hello Dev's </MainHeading>} />
            <Route path='/login' element={<MainHeading>Hello Palki </MainHeading>} />
            <Route path='/forgot' element={<Forgot/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
