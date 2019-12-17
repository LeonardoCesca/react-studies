import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <Person name="Leo" age="22" />
      <Person name="Vic" age="21" />
      <Person name="Tiago" age="37" />
    </div>
  );
}

export default App;
