import React, { Component } from 'react';

export default class Lifecycle extends Component {

    constructor(props) {

        console.log('constructor called')

        super(props);

        this.state = {

            count: 0

        };

        this.Add = this.Add.bind(this);

        this.Remove = this.Remove.bind(this);

        this.Squre = this.Squre.bind(this);

        this.Clear = this.Clear.bind(this);

    }



    componentWillMount() {

        console.log('componentWillMount called')

    }

    componentDidMount() {

        console.log('componentDidMount called')

    }

    Add() {

        this.setState({ count: this.state.count + 1 })

    }

    Remove() {

        this.setState({ count: this.state.count - 1 })

    }

    Squre() {
        this.setState({ count: this.state.count * this.state.count })
    }

    Clear() {
        this.setState({ count: this.state.count = 0 })
    }
    componentWillReceiveProps() {

        console.log('componentWillReceiveProps called')

    }

    shouldComponentUpdate() {

        console.log('shouldComponentUpdate called');

        return true

    }

    componentWillUpdate() {

        console.log('componentWillUpdate called')

    }

    componentDidUpdate() {

        console.log('componentDidUpdate called');

    }

    render() {

        console.log('render called');

        return (

            <div>

                <div>

                    <h1>{this.state.count}</h1>

                </div>

                <button onClick={this.Add}>

                    <span>+(Add)</span>

                </button>

                <button onClick={this.Remove}>

                    <span>-(Remove)</span>

                </button>


                <button onClick={this.Squre}>

                    <span>^(Square )</span>

                </button>

                <button onClick={this.Clear}>

                    <span>(Clear)</span>

                </button>


            </div>

        );

    }

}