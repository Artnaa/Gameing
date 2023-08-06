import "./game_platform.css";

import smartphone from '../Assets/images/Game_device_platform/smartphone (2) 1.png'
import pc from '../Assets/images/Game_device_platform/pc 1.png'
import ps4 from '../Assets/images/Game_device_platform/ps4 1.png'
import vrglasses from '../Assets/images/Game_device_platform/vr-glasses 1.png'
import cube from '../Assets/images/Game_device_platform/3d-cube 1.png'
import desktop from '../Assets/images/Game_device_platform/desktop (1) 1.png'
import arrow from '../Assets/images/Game_device_platform/arrow 1.png'

function Game_platforms() {
  return(
    <section className="game_platforms">
      <div className="game_platforms_content">
        <h3 className="game_platform_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        <p className="game_platform_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>


        <div className="game_devices_container">
          <div className="game_devices_container_first_line">
            <div className="game_devices_container_first_line_card">
              <img src={smartphone} alt="" className="game_devices_container_first_line_card_icon"/>
              <p>Mobile Game Development</p>
              <img src={arrow} alt=""/>
            </div>

            <div className="game_devices_container_first_line_card">
              <img src={pc} alt="" className="game_devices_container_first_line_card_icon"/>
              <p>PC Game Development</p>
              <img src={arrow} alt=""/>
            </div>

            <div className="game_devices_container_first_line_card">
              <img src={ps4} alt="" className="game_devices_container_first_line_card_icon"/>
              <p>PC Game Development</p>
              <img src={arrow} alt=""/>
            </div>

            <div className="game_devices_container_first_line_card">
              <img src={vrglasses} alt="" className="game_devices_container_first_line_card_icon"/>
              <p>AR/VR Solutions</p>
              <img src={arrow} alt=""/>
            </div>

           
          </div>
          <div className="game_devices_container_second_line">
          <div className="game_devices_container_first_line_card">
              <img src={cube} alt="" className="game_devices_container_first_line_card_icon"/>
              <p>AR/VR Solutions</p>
              <img src={arrow} alt=""/>
            </div>
            <div className="game_devices_container_first_line_card">
              <img src={desktop} alt="" className="game_devices_container_first_line_card_icon"/>
              <p>3D Modelings</p>
              <img src={arrow} alt=""/>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default Game_platforms