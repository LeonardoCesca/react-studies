import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button>+</button>
            <button>-</button>
            {isLogged ? <h3>Valuable information i shouldn't see</h3> : ''}
        </div>
    );
}

export default Counter;