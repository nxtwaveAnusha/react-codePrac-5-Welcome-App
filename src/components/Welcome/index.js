import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: 'Subscribe'}

  renderSubscribeButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === 'Subscribe') {
      return this.setState({isSubscribe: 'Subscribed'})
    }
    return this.setState({isSubscribe: 'Subscribe'})
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="btn" onClick={this.renderSubscribeButton}>
          {isSubscribe}
        </button>
      </div>
    )
  }
}
export default Welcome
