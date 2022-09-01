import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    
    render() { return (
        <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair color: {this.props.hairColor}</p>
            <button onClick={() => {this.setState({age: this.state.age + 1})}}>Birthday</button>
        </div>
    )}
}
