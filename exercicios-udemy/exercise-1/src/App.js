import React, { useState } from 'react';
import UserInput from '../src/UserInput/UserInput';
import UserOutput from '../src/UserOutput/UserOutput';
import './App.css';

function App() {
  const [personsState, setPersonsState] = useState ({
    username: 'superLeo'
  });

  const personHandler = (event) => {
    setPersonsState({
      username: event.target.value
    });
  };

  return (
    <div className="App">
      <UserInput 
        changed={personHandler}
        currentName={personsState.username}
      />
      <UserOutput userName= { personsState.username } />
      <UserOutput userName="Leo" />
      <UserOutput userName="Leo" />
    </div>
  );
}

export default App;
