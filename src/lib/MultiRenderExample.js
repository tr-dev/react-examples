import React from 'react';

class MultiRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [
        'Item 1', 'Item 2'
      ]
    }
  }
  addToList(){
    this.setState((prevState) => {
      let list = prevState.list;
      list.push(this.refs.addItem.value)
      return { list };
    })
  }
  render() {
    const Items = this.state.list.map((item) =>{
      return <ListItem val={item} />
    })
    return (
      <div>
        <ul>{Items}</ul>
        <p><input type="text" ref="addItem"/><button onClick={this.addToList.bind(this)}>Add</button></p>
      </div>
    );
  }
}
class ListItem extends React.Component {
  render() {
    return <li key={this.props.val}>{this.props.val}</li>
  }
}
export { MultiRender };
