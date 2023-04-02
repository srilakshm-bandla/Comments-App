// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsFavorite, deleteComment} = props
  const {name, initialClassName, comment, isLiked, id} = commentDetails

  const firstName = name.slice(0, 1)

  const date = formatDistanceToNow(new Date())

  const textColor = isLiked ? 'blue-text' : ''

  const onLiked = () => {
    toggleIsFavorite(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-items">
      <div>
        <div className="card3">
          <div className="box2">
            <p className={initialClassName}>{firstName}</p>
          </div>
          <button type="button" onClick={onLiked} className="like-button">
            <img src={likeImgUrl} alt="like" />
          </button>
          <p className={`like-text ${textColor}`}>Like</p>
        </div>
      </div>

      <div>
        <div className="card4">
          <p className="name">{name}</p>
          <p>{date}</p>
        </div>

        <p className="comment">{comment}</p>
        <div className="card6">
          <button type="button" onClick={onClickDelete} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
