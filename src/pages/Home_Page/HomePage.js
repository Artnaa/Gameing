import Header from "./Header/index"
import TrendingGames from "./Trend_games/trengGames"
import Game_fragment from "./Game_fragment/game_fragment"
import Game_platforms from "./Game_platforms/game_platform";
import "./HomePage.css";

function HomePage() {
  return(
    <div className="HomePage">
      <Header/>
      <TrendingGames/>
      <Game_fragment/>
      <Game_platforms/>
    </div>
  )
}
export default HomePage