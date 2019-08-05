import React from 'react'

// import the other components into this file to use in our App component
import ChildComponent from './components/InputComponent';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      name: 'Tayte'
    }

    // whenever we create a method we need to bind it to this component so it always knows to refer to this comp
    this.handleChange = this.handleChange.bind(this);
  }

  // methods to update our state
  handleChange(event){
    // setState with new values
    this.setState({
      name: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h1>I'm the parent component</h1>
        {/* render the child component below and add props*/}
        {/* pass the name from state and the handleChange method as a prop */}
        <ChildComponent name={this.state.name} handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default App;