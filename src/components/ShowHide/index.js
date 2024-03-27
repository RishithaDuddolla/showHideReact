import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstnamebutton: false, secondnamebutton: false}

  onClickedfn = () => {
    this.setState(prevstate => ({
      firstnamebutton: !prevstate.firstnamebutton,
    }))
  }

  onClickedsn = () => {
    this.setState(prevstate => ({
      secondnamebutton: !prevstate.secondnamebutton,
    }))
  }

  render() {
    const {firstnamebutton, secondnamebutton} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="h1">Show/Hide</h1>
          <div className="wrap">
            <div className="margin">
              <button type="button" className="btn" onClick={this.onClickedfn}>
                Show/Hide Firstname
              </button>
              {firstnamebutton ? (
                <div className="fn">
                  <h1 className="name"> Joe </h1>
                </div>
              ) : null}
            </div>
            <div className="margin">
              <button type="button" className="btn" onClick={this.onClickedsn}>
                Show/Hide Lastname
              </button>
              {secondnamebutton ? (
                <div className="fn">
                  <h1 className="name">Jonas</h1>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
