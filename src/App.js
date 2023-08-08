import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';


import Aboutuspage from './pages/About_us/Aboutuspage';
import Nav from './pages/About_us/Header/nav';
import HomePage from './pages/Home_Page/HomePage';
import Services from './pages/Porfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './pages/News/index';




function App() {
  return (
    <div className="App">
      {/* <Aboutuspage/> */}
      {/* <HomePage /> */}
      {/* <Services /> */}
      {/* <News/> */}



      <BrowserRouter>
          <Routes>
              <Route path="/about" element={<Aboutuspage />} />
              <Route path="/Home" element={<HomePage/>} />
              <Route path="/portfolio" element={<Services/>} />
              <Route path="/News" element={<News/>} />
          </Routes>      
        </BrowserRouter>
    </div>
  );
}


export default App;



