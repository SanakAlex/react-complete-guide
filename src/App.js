import React, {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

const App = () => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: "Alex", age: 22},
      {name: "Max", age: 23}
    ]
  });

  const otherState = useState('some other state');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        {name: "Alexey", age: 24},
        {name: "Max", age: 23}
      ]
    })
  };

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
          <button onClick={switchNameHandler}>Switch name</button>
          <Person name={personState.persons[0].name}
                  age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name}
                  age={personState.persons[1].age}>My hobby : football</Person>
        </header>
      </div>
  );

};

export default App;
