import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import Navigation from './components/navbar/navbar';

function App() {
  return(
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App;