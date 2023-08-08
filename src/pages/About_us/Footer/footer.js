import "./footer.css"
import facebooklogo from '../assets/images/facebook 1.svg'
import twiterlogo from '../assets/images/twitter 1.svg'
import linkedinlogo from '../assets/images/linkedin 1.svg'
import instagramlogo from '../assets/images/instagram 1.svg'
import elipse from '../assets/images/Ellipse 1.png'


function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_content">
          <p className="footer_content_logo ">LOGO</p>
          <span className="footer_content_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
          <span className="footer_content_text_instagram">@Lorem</span>
        </div>

        <div className="footer_content_about_company">
          <p className="footer_content_titles">About Us</p>
          <ul className="footer_abouts_us_content">
            <li>Zeux</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer_contacts">
          <p className="footer_content_titles">Contacts</p>
          <ul className="footer_contacts_content">
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li>+908 89097 890</li>
          </ul>
        </div>

        <div className="fototer_social_contants">
          <a href="wwww.facebook.com"> <img src={facebooklogo} alt="facebook_logo" /></a>

          <a href="wwww.instagram.com"><img src={instagramlogo} alt="instagram_logo" /></a>
          <a href="www.twitter.com"><img src={twiterlogo} alt="twitter_logo" /></a>
          <a href="wwww.linkedin.com"><img src={linkedinlogo} alt="facebook_logo" /></a>
          
        </div>
      </div>
      <span className="copyright">Copyright ® 2021 Lorem All rights Rcerved</span>

    </footer>
  )
}
export default Footer