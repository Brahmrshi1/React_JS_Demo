import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }
    // clear(){
    //     this.setState({counter:this.state.counter = 0 })
    // }

    render() {
        return (
            <div>

                <h1>State Example</h1>
                <button onClick={this.increment}>Like</button>
                <p>{this.state.counter}</p>
                {/* <button onClick={this.clear}>Clear</button> */}

            </div>
        )
    }
}
