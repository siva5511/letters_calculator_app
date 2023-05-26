import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {stringLength: 0}

  textEntered = event => {
    this.setState({stringLength: event.target.value.length})
  }

  render() {
    const {stringLength} = this.state
    return (
      <div className="main-cont">
        <div className="sub-cont">
          <h1 className="header-prop">
            Calculate the <br />
            Letters you enter
          </h1>
          <label className="label-prop" htmlFor="ip">
            Enter the phrase
          </label>
          <br />
          <input
            placeholder="Enter the phrase"
            onChange={this.textEntered}
            className="ip-prop"
            type="text"
            id="ip"
          />
          <br />
          <p className="button-prop">No.of letters: {stringLength}</p>
        </div>
        <img
          alt="letters calculator"
          src="
https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="image-prop"
        />
      </div>
    )
  }
}

export default LettersCalculator
