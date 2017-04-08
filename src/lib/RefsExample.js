import React from 'react';
import ReactDOM from 'react-dom';
class RefsExample extends React.Component {
  constructor() {
    super();
    this.state = {
      a : '',
      b : '',
      c : ''
    }
  }
  update(e){
    this.setState({
      a : this.refs.a.value,
      b : this.b.value,
      c : ReactDOM.findDOMNode(this.c).value
    })
  }
  render() {
    return (
      <div>
        <input
          ref="a"
          type="text"
          onChange={this.update.bind(this)}
        />
        <span> {this.state.a} </span>
        <p>Uses a hardcoded value</p>

        <input
          ref={ node => this.b = node}
          type="text"
          onChange={this.update.bind(this)}
        />
        <span> {this.state.b} </span>
        <p>Uses a callback to bind ref to this</p>

        <Input
          ref={ compoent => this.c = compoent}
          update={this.update.bind(this)}
        />
        <span> {this.state.c} </span>
        <p>Uses ReactDOM to find the node in the component</p>
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return <input type="text" onChange={this.props.update} value={this.props.value} />
  }
}
export { RefsExample }
