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

  const [showPersonsState, setShowPersonsState] = useState ({
    showPersons: false
  });

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Tiago', age: 27},
      ],
    })
  },
  
  togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({showPersons: !doesShow});
  }

  return (
    <div className="App">
      <button onClick={togglePersonsHandler}>Toggle</button>
      { showPersonsState.showPersons ?
      <div>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} changed={nameChangedHandler} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div> : null
      } 
    </div>
  );
}

export default App;
