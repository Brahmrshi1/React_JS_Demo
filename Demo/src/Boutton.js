import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
        <Button onClick={this.handelClick}>
            {this.state.counter}
        </Button>
      </div>
    )
  }
}
