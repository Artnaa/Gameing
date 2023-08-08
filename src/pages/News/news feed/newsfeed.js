import './newsfeed.css'
import restange274 from '../Assets/images/Rectangle 274.png'
import restange275 from '../Assets/images/Rectangle 275.png'
import restange276 from '../Assets/images/Rectangle 276.png'
import restange277 from '../Assets/images/Rectangle 277.png'
import restange278 from '../Assets/images/Rectangle 278png.png'
import restange279 from '../Assets/images/Rectangle 279.png'
import restange280 from '../Assets/images/Rectangle 280.png'
import restange281 from '../Assets/images/Rectangle 281.png'
import restange282 from '../Assets/images/Rectangle 282.png'

function NewsFeed() {
  return (
    <section className="news_feed_container">
      <div className="news_feed_container_left_side">
        <div className='restangle_274'>
          <img src={restange274} alt="game_image" />
          <p>John smash</p>
          <span>.5min</span>
          <h2>Lorem Ipsum is simply dummy text dummy text </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        </div>

        <div className='restangle_274'>
          <img src={restange275} alt="game_image" />
          <p>John smash</p>
          <span>.5min</span>
          <h2>Lorem Ipsum is simply dummy text dummy text </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        </div>
      </div>

      <div className="news_feed_container_right_side">
        <div className='games_card'>
          <img src={restange276} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange276_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>

        <div className='games_card'>
          <img src={restange277} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange277_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>

        <div className='games_card'>
          <img src={restange278} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange278_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>

        <div className='games_card'>
          <img src={restange279} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange279_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>

        <div className='games_card'>
          <img src={restange280} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange280_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>

        <div className='games_card'>
          <img src={restange281} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange281_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>

        <div className='games_card'>
          <img src={restange282} alt="gameimage" />
          <div className='games_card_content'>
            <p className='restange282_background_color'>John smash</p>
            <span>.5min</span>
            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsFeed