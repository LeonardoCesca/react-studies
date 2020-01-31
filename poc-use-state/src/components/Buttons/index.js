import React, { useState } from 'react';

import { Button } from './styles';

const Buttons = () => {
    const [name, setName] = useState('');

    return (
        <>
            <Button onClick={() => setName('Léo')}>Léo</Button>
            <Button onClick={() => setName('Rafael')}>Rafael</Button>
            <Button onClick={() => setName('')}>Reset</Button>
            <h1>{name}</h1>
        </>
    )
};

export default Buttons;