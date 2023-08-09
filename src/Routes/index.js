import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutuspage from '../pages/About_us/Aboutuspage';
import Nav from '../pages/About_us/Header/nav/index';
import HomePage from '../pages/Home_Page/HomePage';
import Services from '../pages/Porfolio';
import News from '../pages/News/index';

export function route() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutuspage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/portfolio" element={<Services />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}