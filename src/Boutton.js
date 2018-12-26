import React, { Component } from 'react'

export default class Boutton extends Component {
 state={counter:0};
 
 handelClick=()=>{
     this.setState({
         counter: this.state.counter + 1
     })
 };
    render() {
    return (
      <div>
        <Boutton onClick={this.handelClick}>
            {this.state.counter}
        </Boutton>
      </div>
    )
  }
}
