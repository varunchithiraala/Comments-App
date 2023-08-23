// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active-button' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLikeIcon = () => {
    toggleIsLiked(id)
  }

  const onDeleteCommentIcon = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="inputname-time-container">
            <p className="inputname">{name}</p>
            <p className="posted-time">{postedTime} ago</p>
          </div>
          <p className="inputcomment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} className="like-image" alt="like" />
          <button
            className={likeTextClassName}
            onClick={onClickLikeIcon}
            type="button"
          >
            {' '}
            Like
          </button>
        </div>
        <button
          className="button"
          onClick={onDeleteCommentIcon}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
