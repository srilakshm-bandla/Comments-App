import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const arrayList = []
class Comments extends Component {
  state = {name: '', comment: '', commentsList: arrayList}

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onChangeName = e => {
    this.setState({name: e.target.value})
  }

  onChangeComment = e => {
    this.setState({comment: e.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onClickDelete = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filteredComments})
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length

    console.log(commentsList)
    return (
      <div className="comments-container">
        <h1 className="comments-heading">Comments</h1>
        <p className="about-comment">Say something about 4.0 Technologies</p>
        <div className="inner-container">
          <div>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Your Name"
                className="nameInput"
                onChange={this.onChangeName}
              />
              <br />
              <br />
              <textarea
                rows="5"
                cols="20"
                id="comment"
                name="comment"
                placeholder="Your Comment"
                className="commentInput"
                value={comment}
                onChange={this.onChangeComment}
              />
              <br />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="count-text">
          <span className="count">{count}</span>
          <span className="text">Comments</span>
        </div>
        <ul className="list-container">
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              toggleIsFavorite={this.toggleIsFavorite}
              deleteComment={this.onClickDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
