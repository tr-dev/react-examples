import React from 'react';

class ShouldCompUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
  }
  update() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
    console.log('render', this.state.count)
    return (
      <div>
        <button onClick={this.update.bind(this)}>Press Me 3 times</button>
        <p>This val only updates when the button is pressed 3 times  | <span>{this.state.count}</span></p>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return ((nextState.count % 3) === 0);
  }
  componentWillUpdate() {

  }
  componentDidUpdate(){
    if( this.state.count >= 6) {
      this.setState(() => {
        return { count : 0}
      })
    }
  }
}

export { ShouldCompUpdate };
