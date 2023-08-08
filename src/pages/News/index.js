import Nav from "../Home_Page/Header/nav"
import Newsdirectory from "./newsdirectory/newsdirectory"
import NewsFeed from "./news feed/newsfeed"
import Register from "./Register/register"
import Footer from '../About_us/Footer/footer'
import './index.css'

function News() {

  return (
    <>
      <Nav />
      <section className="news_page_container">
        <Newsdirectory />
        <NewsFeed />
        <Register />
        <Footer />
      </section>
    </>
  )
}
export default News