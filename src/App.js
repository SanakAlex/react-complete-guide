import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Alex", age:22},
      {name: "Max", age:23},
      {name: "Peter", age:13}
    ]
  };

  switchNameHandler = () => {
    console.log('CLICK!');
  };

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
              <h1>Learn React is started</h1>
            </a>
            <button onClick={this.switchNameHandler}>Switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby : football</Person>
          </header>
        </div>
    );
  }

  //React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello'));
}

export default App;