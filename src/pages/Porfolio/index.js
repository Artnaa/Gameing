import "./index.css"
import Nav from "../About_us/Header/nav"
import Footer from '../About_us/Footer/footer'
import React, { useState } from 'react';

import users from './Assests/Images/icons/heroicons_sm-user.png'
import videoimage from './Assests/Images/icons/VideoImage.png'
import doneicon from './Assests/Images/icons/bx_bxs-check-circle.png'
import play from './Assests/Images/icons/Icon - Play.svg'
import video from './Assests/Videos/Spiderman.mp4'

import profile1 from './Assests/Images/profilePhotos/Ellipse 175.svg'
import profile2 from './Assests/Images/profilePhotos/Ellipse 176.svg'
import profile3 from './Assests/Images/profilePhotos/Ellipse 177.svg'
import star from './Assests/Images/profilePhotos/ant-design_star-filled.svg'







function Services() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
    setIsVideoActive(true);

  }

  return (
    <>
      <section className="services">
        <Nav />
        <section className="service_users">
          <div className="success">
            <span>Home &#62;<span>Services</span></span>
            <h1 className="success_title">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <h3 className="success_subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h3>
          </div>

          <div className="users_data">
            <div className="users_data_container">
              <div className="users_data_content">
                <img src={users} alt="user_icon" />
                <div className="users_data_content_text">
                  <span>90+ <br /><p>Clients</p></span>
                </div>
              </div>
            </div>

            <div className="users_data_container">
              <div className="users_data_content">
                <img src={users} alt="user_icon" />
                <div className="users_data_content_text">
                  <span>90+ <br /><p>Clients</p></span>
                </div>
              </div>
            </div>

            <div className="users_data_container">
              <div className="users_data_content">
                <img src={users} alt="user_icon" />
                <div className="users_data_content_text">
                  <span>90+ <br /><p>Clients</p></span>
                </div>
              </div>
            </div>


          </div>

          <div className="video_container">
            <div className="video">

              <video
                className={` ${isVideoPlaying ? 'active' : ''}`}
                controls
                autoPlay={isVideoPlaying}
                onPause={() => setIsVideoActive(false)} >
                <source src={video} type="video/mp4"

                />
              </video>

              <img
                className={` ${isVideoPlaying ? 'active' : ''}`}
                src={play}
                alt="playicon"
                style={{ cursor: 'pointer' }}
                onClick={handlePlayClick}
              />

            </div>

            <div className="video_container_content">
              <h2 className="video_container_title">Lorem Ipsum is simply dummy text.</h2>
              <h3 className="video_container_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy ..</h3>
              <div className="video_container_done_list_container">
                <div className="video_container_done_list" >
                  <img src={doneicon} alt="" />
                  <span>Lorem Ipsum is simply</span>
                </div>

                <div className="video_container_done_list">
                  <img src={doneicon} alt="icon" />
                  <span>Lorem Ipsum is simply</span>
                </div>

                <div className="video_container_done_list">
                  <img src={doneicon} alt="" />
                  <span>Lorem Ipsum is simply</span>
                </div>

                <div className="video_container_done_list">
                  <img src={doneicon} alt="" />
                  <span>Lorem Ipsum is simply</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="about_game_restangles">
          <div className="about_game_content restangle_25">
            <h2 className="about_game_content_title">Lorem Ipsum is simply dummy
              text dummy text
            </h2>
            <p className="about_game_content_text">
              Lorem I
              psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
            <a href="#" className="read_more_button">Read more</a>
          </div>
          <div className="about_game_image restangle_25_image">

          </div>
        </div>

        <div className="about_game_restangles">
          <div className="about_game_content restangle_26">
            <h2 className="about_game_content_title">Lorem Ipsum is simply dummy
              text dummy text
            </h2>
            <p className="about_game_content_text">
              Lorem I
              psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
            <a href="#" className="read_more_button">Read more</a>
          </div>
          <div className="about_game_image restangle_26_image">

          </div>
        </div>

        <div className="about_game_restangles">
          <div className="about_game_content restangle_27">
            <h2 className="about_game_content_title">Lorem Ipsum is simply dummy
              text dummy text
            </h2>
            <p className="about_game_content_text">
              Lorem I
              psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
            <a href="#" className="read_more_button">Read more</a>
          </div>
          <div className="about_game_image restangle_27_image">

          </div>
        </div>

        <section className="users_reviews">
          <div className="users_reviews_content">
            <h3>Trusted by Thousands of Happy Customer</h3>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</h4>
          </div>

          <div className="reviwes_cards_group">
            <div className="reviwes_card">
              <div className="reviwes_card_content" >


                <div className="user_name">
                  <img src={profile1} alt="profile1" />

                  <div className="aa">
                    <h3>Viezh Robert</h3>
                    <h4>Warsaw, Poland</h4>
                  </div>
                </div>
                <div className="star_rate">
                  <span>3.5 </span>
                  <img src={star} alt="" />
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

            </div>

            <div className="reviwes_card">
              <div className="reviwes_card_content" >


                <div className="user_name">
                  <img src={profile2} alt="useravatar" />

                  <div className="aa">
                    <h3>Viezh Robert</h3>
                    <h4>Warsaw, Poland</h4>
                  </div>
                </div>
                <div className="star_rate">
                  <span>3.5 </span>
                  <img src={star} alt="useravatar" />
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and</p>

            </div>

            <div className="reviwes_card">
              <div className="reviwes_card_content" >


                <div className="user_name">
                  <img src={profile3} alt="useravatar" />

                  <div className="aa">
                    <h3>Viezh Robert</h3>
                    <h4>Warsaw, Poland</h4>
                  </div>
                </div>
                <div className="star_rate">
                  <span>3.5 </span>
                  <img src={star} alt="" />
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </div>
          </div>
        </section>

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
        <Footer />
      </section>
    </>
  )
}
export default Services