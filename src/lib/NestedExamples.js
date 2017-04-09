import React from 'react';



const Hearts = (props) => { return <span>&hearts;</span>};
const Button = (props) => { return <button>{props.children}</button> };
class NestedComponents extends React.Component {
  render() {
    return (
      <p><Button>I <Hearts /> nested components </Button></p>
    )
  }
}
export { NestedComponents };
