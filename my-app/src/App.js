import './App.css';
import React,{ useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navBar';
import Python1 from './components/python1';
import Python2 from './components/python2';
function App() {
  const [CoursesData, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/Python")
      .then((respose) => respose.json())
      .then((respose) => {
         setData(respose);
      })
} ,[])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home data={CoursesData}/>} />
        <Route path='/python1' element={<Python1 data={CoursesData}/>} />
        <Route path='/python2' element={<Python2 data={CoursesData}/>} />
      </Routes>
      
        
    </div>
  );
}

export default App;
