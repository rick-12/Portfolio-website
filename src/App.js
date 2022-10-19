import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(false);
  document.body.style = mode ? 'background: #15337a' : 'background: white';

  return (
    <>
      <Router>
        <div className="back">
          <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<TextForm />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
