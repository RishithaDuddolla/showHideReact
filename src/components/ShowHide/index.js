import {Comopnent} from 'react'
import './index.css'

class ShowHide extends Comopnent {
  state = {firstnamebutton: false, secondnamebutton: false}

  onClicked = () => {
    this.setSate(prevstate => ({
      firstnamebutton: !prevstate.firstnamebutton,
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
            <div>
              <button type="button" className="btn" onClick={this.onClicked}>
                Show/Hide Firstname
              </button>
              {firstnamebutton ? (
                <div className="fn">
                  <h1 className="name"> Joe </h1>
                </div>
              ) : null}
            </div>
            <div>
              <button type="button" className="btn" onClick={this.onClicked}>
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
