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

class SharedState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedDisplay : "Shared Text"
    }
  }
  update(e) {
    this.setState({
      sharedDisplay: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>Shared State Part 1: <SubShareClass sharedDisplay={this.state.sharedDisplay} updateShared={this.update.bind(this)} /></p>
        <p>Shared State Part 2: <SubShareClass sharedDisplay={this.state.sharedDisplay} updateShared={this.update.bind(this)} /></p>
      </div>
    )
  }
}

class SubShareClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <input
          type="text"
          value={this.props.sharedDisplay}
          onChange={this.props.updateShared}
        />
      </span>
    )
  }
}

export { StateExample, UpdateState, SharedState };
