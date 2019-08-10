import React from 'react'

let ehLegal = true; 

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <p>Legal? {ehLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>