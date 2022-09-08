import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navBar';
import Python1 from './components/python1';
import Python2 from './components/python2';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/python1' element={<Python1 />} />
        <Route path='/python2' element={<Python2 />} />
      </Routes>
      
        
    </div>
  );
}

export default App;
