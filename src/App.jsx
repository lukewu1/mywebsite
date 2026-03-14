import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './pages/Header'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter basename="/mywebsite">
        <div className="mainbody">
          <div className="sub_body">
            <Header />
          </div>
          <div className="sub_body">
            <About />
          </div>
        </div>
        <Experience />
        <Projects />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
