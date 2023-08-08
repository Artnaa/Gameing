import './register.css'

function Register() {
  return(
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
  )
}
export default Register