// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  first = () => {
    const {firstName} = this.state

    this.setState({firstName: !firstName})
  }

  first = () => {
    const {lastName} = this.state

    this.setState({lastName: !lastName})
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="main">
        <h1 className="head">Show/Hide</h1>
        <div className="names-card">
          <div className="each-card">
            <button type="button" className="btn" onClick={this.first}>
              Show/Hide Firstname
            </button>
            {firstName ? <h1 className="f-name">Joe</h1> : null}
          </div>
          <div>
            <button type="button" className="btn" onClick={this.last}>
              Show/Hide Lastname
            </button>
            {lastName ? <h1 className="f-name">Jonas</h1> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
