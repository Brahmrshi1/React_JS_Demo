import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NestedElement from './NestedElement';
import Boutton from'./Boutton';
import Stateful from './Stateful';
import Stateexample from'./Stateexample'
import Propsexamplone from'./Propsexamplone'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
           
        </header>
        <NestedElement/>
        <Boutton />
        <Stateful/>
        <Stateexample/>
        <Propsexamplone/>
      {/* <Content/> */}
      {/* <Header/>    */}
      </div>
    );
  }
}



// class Header extends React.Component {
//   render() {
//      return (
//         <div>
//            <h1>Header</h1>
//         </div>
//      );
//   }
// }
// class Content extends React.Component {
//   render() {
//      return (
//         <div>
//            <h2>Content</h2>
//            <p>The content text!!!</p>
//         </div>
//      );
//   }
// }
 
export default App;


