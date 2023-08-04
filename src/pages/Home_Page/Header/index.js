import "./style.css";
import Nav from "./nav"
import Products from "./Products_of_company/product";

function Header() {
  return (
    <section className="Home_page_header">
      <Nav />
      <Products />
    </section>
  )
}

export default Header