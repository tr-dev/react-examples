import React from 'react';
import  * as Examples from './lib'
console.log(Examples)
//Stateless
// const App = () => <h1>Stateless</h1>

//Withot JSX
// class App extends React.Component {
//   render(){
//     return React.createElement('h1', null, 'React.Create')
//   }
// }


// Class, components - Can have "state"
class App extends React.Component {
  constructor() {
    super(); //Set this to local components
    this.state =  {
      currVal : (new Date).getTime()
    };
  }
  //Update not in spec, custom to tutorial I'm using
  //Set state only overwrites what we pass in
  //Set state will trigger render
  update(e) {
    this.setState({
      currVal: e.target.value
    });
  }
  render(){
    return (
      <div>
        <Examples.SimpleInitExample />
        <Examples.PropsExample />
        <Examples.PropsExample text="This text overwrites!" />
        <Examples.NestedProps />
        <Examples.StateExample />
        <Examples.UpdateState />
        <Examples.PropsCBValidation text="Good Text" />
        <Examples.PropsCBValidation text="Bad Text" />
        <Examples.DefaultEvents />
        <Examples.RefsExample />
        <Examples.MountExample />
      </div>
    )
  }
}


export default App
