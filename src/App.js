import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Alex", age: 22},
      {name: "Max", age: 23}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 24},
        {name: "Max", age: 23}
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Alex", age: 24},
        {name: event.target.value, age: 23}
      ]
    })
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
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
            <button onClick={() => this.switchNameHandler('Aleksei')}>Switch
              name
            </button>
            <Person name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Oleksii')}/>
            <Person name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    change={this.nameChangeHandler}>My hobby : football</Person>
          </header>
        </div>
    );
  }
}

export default App;
