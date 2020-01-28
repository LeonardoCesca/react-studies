import React, { useEffect, useState } from 'react';

import * as ItemsService from './services/api';

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    ItemsService
      .getItems()
      .then(data => {
        setItems(data)
      })
  }, [])

  return (
    <div className="App">
      {items.map(item => (
        <p>{item.title}</p>
      ))}
    </div>
  )
}

export default App;
