// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {object: this.props, isActive: false}

  onClickExtendIcon = () => {
    const {isActive} = this.state
    this.setState({
      isActive: !isActive,
    })
  }

  render() {
    const {object, isActive} = this.state
    const {questionText, answerText} = object.obj

    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="heading-icon-container">
          <div className="question-button-container">
            <h1>{questionText}</h1>
            <button
              type="button"
              className="button"
              onClick={this.onClickExtendIcon}
            >
              <img src={imgUrl} alt={altText} />
            </button>
          </div>
          {isActive && (
            <div className="line-bottom-para-container">
              <hr className="horizontal-line" />
              <p>{answerText}</p>
            </div>
          )}
        </div>
      </li>
    )
  }
}
export default FaqItem
