import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "Testing State"
    }
  }
  render() {
    return <p>With State: {this.state.text}</p>
  }
}

class UpdateState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val : 0
    }
  }
  update(){
    this.setState((prevState) => {
      return {val : prevState.val + 1}
    })
  }
  render() {
    return (
      <div>
        <p>Current Val: {this.state.val} <button onClick={this.update.bind(this)}>Update Val</button></p>
      </div>
    )
  }
}
export { StateExample, UpdateState };
