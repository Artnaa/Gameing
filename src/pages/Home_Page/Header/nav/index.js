
import "./index.css"


function Nav() {
  return (

    <nav>
      <p>LOGO</p>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/news">News</a></li>
      </ul>
      <a href="/contacts" className="contactsLink">Contacts</a>
    </nav>

  )
}
export default Nav