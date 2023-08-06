import "./recentProjects.css";

function RecentProjects() {
  return (
    <section className="recent_projfects">
      <div className="recent_projfects_content">
        <span className="recent_projfects_title">Our Recent Projects</span>
        <p className="recent_projfects_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>

      <div className="recent_projfects_images">

        <div className="recent_projfects_images_first_line">
          <div className="kartochka">

          </div>

          <div className="kartochka">

          </div>

          <div className="kartochka">

          </div>

        </div>

        <div className="recent_projfects_images_second_line">
          <div className="kartochka">

          </div>

          <div className="kartochka">

          </div>

          <div className="kartochka">

          </div>


        </div>



      </div>
      <a href="#" className="">SEE ALL</a>

      
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
export default RecentProjects