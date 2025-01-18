import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import Team from './components/pages/team';
import About from './components/pages/about';
import Navigation from './components/navbar/navbar';

function App() {
  return(
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </HashRouter>
  )
}

export default App;