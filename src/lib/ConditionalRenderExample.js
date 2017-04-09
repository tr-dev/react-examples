import React from 'react';

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextBox : false
    }
  }
  toggleShow() {
    this.setState((prevState) => {
      return {
        showTextBox : !prevState.showTextBox
      }
    })
  }
  render() {
    return (
      <div>
        <p><button onClick={this.toggleShow.bind(this)} >{this.state.showTextBox ? "Hide" : "Show"} the text</button></p>
        {this.state.showTextBox ? <p>Hidden text</p> : ""}
      </div>
    )
  }
}

export { ConditionalRender };
