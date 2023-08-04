import Nav from "./nav"
import AboutUs from "./AboutUs/abouUs";
import "./style.css";
import Reasons from "../Reasons/reasons";

function Header() {
  return (
    <header>
      <Nav />
      <AboutUs />
      <Reasons />
      
      
    </header>
  )
}
export default Header