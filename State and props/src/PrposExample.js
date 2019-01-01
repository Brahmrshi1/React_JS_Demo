import React, { Component } from 'react'

export default class PrposExample extends Component {
    render() {
        return (
            <div>
                <h1>This Is  props example</h1>
                <h3>{this.props.headerprop}</h3>
                <h3>{this.props.contentpropes}</h3>
            </div>
        )
    }
}
// Default Calling
PrposExample.defaultProps = {
    headerprop: "Header from props...",
    contentpropes: "Content from props..."
}