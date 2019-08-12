import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <Membro nome='Leonardo' sobrenome= {props.sobrenome} />
        <Membro nome='Tais' sobrenome= {props.sobrenome} />
        <Membro nome='Maria' sobrenome= {props.sobrenome} />
        <Membro nome='Olivo' sobrenome= {props.sobrenome} />
    </div>
