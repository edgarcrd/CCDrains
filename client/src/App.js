import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { Footer, Hero, Header } from './containers'
import { Navbar } from './components'
import './App.css'


const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Hero />
    </Router>
  )
}

export default App