import React from 'react';

const SimpleInitExample = (props) => <p>Simple Init</p>;
const PropsExample      = (props) => <p>Sample Text: {props.text}</p>

//Props are meant for static data to be passed around
//Simple validation
PropsExample.propTypes = {
  text : React.PropTypes.string,
  cat  : React.PropTypes.number.isRequired
}

PropsExample.defaultProps = {
  text : "This is default text",
  cat  : 10
}


const Hearts = (props) => { return <span>&hearts;</span>};
const Button = (props) => { return <button>{props.children}</button> };
class NestedProps extends React.Component {
  render() {
    return (
      <p><Button>I <Hearts /> nested components </Button></p>
    )
  }
}

const PropsCBValidation = (props) => { return <p>{props.text}</p>}
PropsCBValidation.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    //Example from tutorial
    // if(props[propName].length < 6 ){
    //   return new Error(`${propName} was too short`)
    // }
    //Will generate warning in the console
    if (props[propName].indexOf('Bad') > -1) {
      return new Error(`${propName} is bad`)
    }
  }
}

export { SimpleInitExample, PropsExample, NestedProps, PropsCBValidation};
