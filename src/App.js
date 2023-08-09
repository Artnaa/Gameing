import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {route} from './Routes'


import Aboutuspage from './pages/About_us/Aboutuspage';
import Nav from './pages/About_us/Header/nav';
import HomePage from './pages/Home_Page/HomePage';
import Services from './pages/Porfolio';
import News from './pages/News/index';




function App() {
  return (
    <div className="App">
      {route()}
    </div>
  );
}


export default App;



