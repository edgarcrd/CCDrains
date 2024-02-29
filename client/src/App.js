import React from 'react'

import { Footer, Hero, Header } from './containers'
import { Navbar } from './components'
import './App.css'


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App