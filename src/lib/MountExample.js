import React from 'react';
import ReactDOM from 'react-dom';

class MountExample extends React.Component {
  mount() {
    ReactDOM.render(<Mounting />, document.getElementById('wrap'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('wrap'))
  }
  render() {
    return (
      <div>
        <span><button onClick={this.mount.bind(this)}>Mount</button> </span>
        <span><button onClick={this.unmount.bind(this)}>Unmount</button> </span>
        <div id="wrap"><p>The greatest wrapper alive</p></div>
      </div>
    )
  }
}
class Mounting extends React.Component {
  constructor() {
    super();
    this.state = { val : 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({
      val : this.state.val + 1
    });
  }

  //Built in
  componentWillMount(){
    console.log('componentWillMount');
    this.setState({
      multiplier : 2
    });


  }
  componentDidMount(){
    console.log('componentDidMount')
    console.log(ReactDOM.findDOMNode(this));
    this.incrementalUpdate = setInterval(this.update, 500)
  }
  render(){
    console.log('render')
    return (
        <div className="wrapper">
          <p>
            <button onClick={this.update}>{this.state.val * this.state.multiplier}</button>
          </p>
        </div>
    )
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.incrementalUpdate)
  }
}

export { MountExample }
