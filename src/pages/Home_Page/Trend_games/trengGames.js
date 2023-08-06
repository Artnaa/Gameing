import "./trandGames.css";
import trand_game_first_square_image from '../Assets/images/Rectangle 23.png'
import trand_game_second_square_image from '../Assets/images/Rectangle 24.png'
import trand_game_third_square_image from '../Assets/images/Rectangle 25.png'
import trand_game_fourth_square_image from '../Assets/images/Rectangle 26.png'
import fire from '../Assets/images/fire 1.png'


function TrendingGames() {
  return (
    <section className="trend_games">
      <div className="curently_trend_games">
        <span className="curently_trend_games_title">Currently Trending Games</span>
        <a href="#">SEE ALL</a>
      </div>
      <div className="curently_trend_games_cards">

        <div className="curently_trend_games-card">
          <img src={trand_game_first_square_image} alt="" className="card_background_image" />
          <span>
            <img src={fire} alt="" />
            40 Followers
          </span>
        </div>

        <div className="curently_trend_games-card">
          <img src={trand_game_second_square_image} alt="" className="card_background_image" />
          <span>
            <img src={fire} alt="" />
            40 Followers
          </span>
        </div>

        <div className="curently_trend_games-card">
          <img src={trand_game_third_square_image} alt="" className="card_background_image" />
          <span>
            <img src={fire} alt="" />
            40 Followers
          </span>
        </div>

        <div className="curently_trend_games-card">
          <img src={trand_game_fourth_square_image} alt="" className="card_background_image" />
          <span>
            <img src={fire} alt="" />
            40 Followers
          </span>
        </div>


      </div>
    </section>
  )
}
export default TrendingGames