import React from 'react'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Exchange from './Components/Exchange'
import Coins from './Components/Coins'
import Coindetail from './Components/Coindetail'
import Footer from './Components/Footer'

const App = () => {
  return (
   <Router>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/exchange' element={<Exchange/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path="/coin/:id" element={<Coindetail/>} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
