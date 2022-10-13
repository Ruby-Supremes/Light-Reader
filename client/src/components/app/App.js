import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from "../home/Home";
import HomeCard from '../home/ HomeCard'

export default function App() {
  return (
    // <div>App</div>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeCard />} />
        </Routes>
      </div>
    </Router>
  )
}
