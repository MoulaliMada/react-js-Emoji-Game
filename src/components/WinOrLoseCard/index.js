// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onplayAgain} = props
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winorlose = score === 12 ? 'You Won' : 'You Lose'
  const scoreorbest = score === 12 ? 'Best Score' : 'Score'

  const playAgain = () => {
    onplayAgain()
  }

  return (
    <div className="win-or-lose-container">
      <div className="container1">
        <img src={image} className="win-or-lose-image" alt="win or lose" />
        <h1 className="heading1">{winorlose}</h1>
        <p className="paragraph">{scoreorbest}</p>
        <p className="paragraph">{score}/12</p>
        <button onClick={playAgain} className="button" type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
