import React from 'react';

class DefaultEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent : '________'
    }
  }
  update(e) {
    this.setState({currentEvent : e.type})
  }
  render() {
    return (
      <div>
        <textarea rows="10" cols="25"
          onKeyPress={this.update.bind(this)}
          onCopy={this.update.bind(this)}
          onCut={this.update.bind(this)}
          onPaste={this.update.bind(this)}
          onBlur={this.update.bind(this)}
          onFocus={this.update.bind(this)}
          onDoubleClick={this.update.bind(this)}
          onTouchStart={this.update.bind(this)}
          onTouchMove={this.update.bind(this)}
          onTouchEnd={this.update.bind(this)}
        />
        <p>{this.state.currentEvent}</p>
      </div>
    )
  }
}

export {DefaultEvents}
