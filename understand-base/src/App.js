import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Tiago', age: 27},
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Manuela', age: 29},
        { name: 'Tiag', age: 27},
      ]
    });
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} click={switchNameHandler} />
    </div>
  );
}

export default App;
