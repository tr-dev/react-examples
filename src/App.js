import React from 'react';
import  * as Examples from './lib'

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
  }
  render(){
    return (
      <div>
        <Examples.SimpleInitExample />
        <Examples.PropsExample />
        <Examples.PropsExample text="This text overwrites!" />
        <Examples.NestedComponents />
        <Examples.ConditionalRender />
        <Examples.StateExample />
        <Examples.UpdateState />
        <Examples.SharedState />
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
