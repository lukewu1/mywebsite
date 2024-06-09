import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
// import Experience from './pages/Experience'
// import Projects from './pages/Projects'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename="/mywebsite">
        <Routes>
          <Route index element={<About />} />
          <Route path="/" element={<About />} />
          {/* <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
