import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';


import Aboutuspage from './pages/About_us/Aboutuspage';
import Nav from './pages/About_us/Header/nav';
import HomePage from './pages/Home_Page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      {/* <Aboutuspage/> */}
      <HomePage />



      {/* <BrowserRouter>
          <Routes>
              <Route path="/about" element={<Aboutuspage />} />
              <Route path="/p" element={<Nav/>} />
          </Routes>      
        </BrowserRouter> */}
    </div>
  );
}


export default App;



