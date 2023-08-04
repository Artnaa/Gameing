import Header from '../About_us/Header/index';
import Article from '../About_us/Article/index';
import AboutTeam from '../About_us/About_team/aboutTeam';
import Footer from '../About_us/Footer/footer';
import { Routes, Route, Link } from 'react-router-dom';

function Aboutuspage() {
  return (


    <div className="about_us_page">
      <Header />
      <Article />
      <AboutTeam />
      <Footer />
    </div>

  )
}

export default Aboutuspage


