// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {n: 0}

  render() {
    const {n} = this.state

    const onIncrement = () => {
      this.setState({n: n + Math.floor(Math.random() * 101)})
    }

    return (
      <div className="bg-container">
        <h1>Count {n}</h1>
        {n % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}

        <button type="submit" onClick={onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
