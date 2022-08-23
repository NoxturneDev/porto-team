import React from 'react'
import './css/index.css';
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import Project from './pages/Project'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App