// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const onClicking = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-Item-Container">
      <button className="btn-emoji">
        <img
          src={emojiUrl}
          className="emojiImahe"
          onClick={onClicking}
          alt={emojiName}
        />
      </button>
    </li>
  )
}
export default EmojiCard
