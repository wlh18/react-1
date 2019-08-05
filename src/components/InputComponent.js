import React from 'react'

// Here are both ways to write a component that accepts 'props'

// Functional Component Example
function ChildComponent(props) {
    // the first thing we need to do is accept props as an argument
    // this will be an obj that contains the values passed through from the parent component

    return (
        <div>
            <h1>My name is: {props.name}</h1>
            {/* use the handleChange method coming from props on an onChange event */}
            <input type="text" onChange={props.handleChange}/>
        </div>
    )
}

// Class Component Example
class ChildComponent extends React.Component {
    // props will be set to the component if it is a class so we can access that object using the this keyword
    // this.props

    render(){
        return (
           <div>
            <h1>My name is: {this.props.name}</h1>
            {/* use the handleChange method coming from props on an onChange event */}
            <input type="text" onChange={this.props.handleChange}/>
        </div> 
        )
    }
}

export default ChildComponent;