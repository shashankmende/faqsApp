// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {givenObj: this.props, toDisplayAnswer: false}

  render() {
    const {givenObj, toDisplayAnswer} = this.state
    let {faqsList} = givenObj
    if (faqsList === undefined) {
      faqsList = givenObj
    }
    console.log('given obj =', givenObj)
    console.log('faqslist =', faqsList)
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>FAQs</h1>
          <ul className="unordered-list">
            {faqsList.map(eachQue => (
              <FaqItem
                obj={eachQue}
                key={eachQue.id}
                toDisplayAnswer={toDisplayAnswer}
                onClickIcon={this.onClickIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
