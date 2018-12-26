import React, { Component } from 'react'

export default class NestedElement extends Component {
  render() {
    return (
      <div>
          <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
      </div>
    )
  }
}
