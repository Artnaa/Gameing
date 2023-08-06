import Header from "./Header/index"
import TrendingGames from "./Trend_games/trengGames"
import Game_fragment from "./Game_fragment/game_fragment"
import Game_platforms from "./Game_platforms/game_platform";
import RecentProjects from "./Recent_projects/recentProjfects";
import Footer from '../About_us/Footer/footer'
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <TrendingGames />
      <Game_fragment />
      <Game_platforms />
      <RecentProjects />
      <Footer />
    </div>
  )
}
export default HomePage