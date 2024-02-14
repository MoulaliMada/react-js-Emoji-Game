/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojisList,
      score: 0,
      topScore: 0,
      navBarScoresClassName: 'displaying',
      isFinishedGame: false,
      clickedEmojisList: [],
      hiii: 'gii',
    }
  }

  finishGameAndSetTopScore = length => {
    this.setState(prevState => ({
      topScore: prevState.topScore >= length ? prevState.topScore : length,
      clickedEmojisList: [],
      isFinishedGame: true,
      emojisList: prevState.emojisList.sort(() => Math.random() - 0.5),
      navBarScoresClassName: 'not-displaying',
    }))
  }

  onClickEmoji = id => {
    const {clickedEmojisList, emojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          clickedEmojisList: [...prevState.clickedEmojisList, id],
          emojisList: prevState.emojisList.sort(() => Math.random() - 0.5),
        }))
      }
    }
  }

  onplayAgain = () => {
    this.setState({
      score: 0,
      isFinishedGame: false,
      navBarScoresClassName: 'displaying',
    })
  }

  render() {
    const {
      score,
      emojisList,
      topScore,
      navBarScoresClassName,
      isFinishedGame,
      hiii,
    } = this.state
    return (
      <div className="container">
        <NavBar
          score={score}
          topScore={topScore}
          navBarScoresClassName={navBarScoresClassName}
        />
        {isFinishedGame ? (
          <WinOrLoseCard score={score} onplayAgain={this.onplayAgain} />
        ) : (
          <ul className="ul-emoji-cards">
            {emojisList.map(each => (
              <EmojiCard
                eachEmoji={each}
                key={each.id}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default EmojiGame
