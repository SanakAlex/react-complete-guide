import React from 'react';

import './Person.css';

const person = (props) => {
  return (
      <div className="Person">
        <p onClick={props.click}>I'm a Person and I'm {props.age} years old and
          my name
          is {props.name}!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
      </div>
  );
};

export default person;
