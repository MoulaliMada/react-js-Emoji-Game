// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, navBarScoresClassName} = props
  return (
    <div className="nav-bar">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image"
        />
        <h1 className="emoji-Game-heading">Emoji Game</h1>
      </div>
      <p className={`emoji-Game-heading score ${navBarScoresClassName}`}>
        Score: {score}
      </p>
      <p className={`emoji-Game-heading top-score ${navBarScoresClassName}`}>
        Top Score: {topScore}
      </p>
    </div>
  )
}
export default NavBar
