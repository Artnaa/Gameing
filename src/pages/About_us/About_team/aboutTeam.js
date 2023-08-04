import johnpeter from '../assets/images/staff_avatars/Beverly 1.png'
import johnpeter2 from '../assets/images/staff_avatars/Bill 1.png'
import johnpeter4 from '../assets/images/staff_avatars/Claudia 1.png'

import "./aboutTeam.css"
function AboutTeam() {
  return (
    <section className="about_team_section">
      <div className="team_staff">
        <span>Our Team</span>
        <div className="staff_cards">
          <div className="staff_card_content">
            <img src={johnpeter} alt="" className='staff_profile_avatar' />
            <h3>John peter</h3>
            <h4>COO</h4>
          </div>

          <div className="staff_card_content">
            <img src={johnpeter2} alt="" className='staff_profile_avatar' />
            <h3>John peter</h3>
            <h4>COO</h4>
          </div>

          <div className="staff_card_content">
            <img src={johnpeter4} alt="" className='staff_profile_avatar' />
            <h3>John peter</h3>
            <h4>COO</h4>
          </div>

          <div className="staff_card_content">
            <img src={johnpeter} alt="" className='staff_profile_avatar' />
            <h3>John peter</h3>
            <h4>COO</h4>
          </div>

        </div>
      </div>

      <div className='register_mail'>
        <h3 className='register_mail_title'>Lorem Ipsum</h3>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
        <div className='retister_mail_container'>

          <div className='retister_mail_container_text'>
            <h3 className='retister_mail_container_text_titile'>Stay in the loop</h3>
            <h4 className='retister_mail_container_text_subtitile'>Subscribe to receive the latest news and updates about TDA.
              We promise not to spam you! </h4>
          </div>
          <div className='retister_mail_container_input'>
              <input
               type="text" 
              // placeholder='enter your mail'
              />
              <button>Countinue</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutTeam