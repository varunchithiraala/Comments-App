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
class Comments extends Component {
  state = {
    commentsList: [],
    inputName: '',
    inputComment: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name: inputName,
      comment: inputComment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      inputName: '',
      inputComment: '',
    }))
  }

  onChangeInputName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputComment = event => {
    this.setState({inputComment: event.target.value})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const updatedCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: updatedCommentsList})
  }

  render() {
    const {inputName, inputComment, commentsList} = this.state
    return (
      <div className="comments-app-container">
        <div className="comments-container">
          <h1 className="comments-heading">Comments</h1>
          <div className="comments-inputs">
            <form
              className="comments-form-container"
              onSubmit={this.onAddComment}
            >
              <p className="comments-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="input-name"
                placeholder="Your Name"
                onChange={this.onChangeInputName}
                value={inputName}
              />
              <textarea
                rows="6"
                className="input-comment"
                placeholder="Your Comment"
                onChange={this.onChangeInputComment}
                value={inputComment}
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-image"
              alt="comments"
            />
          </div>
          <hr className="hr-line" />
          <p className="comment-heading">
            <span className="comments-count">{commentsList.length} </span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLiked={this.toggleIsLiked}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
