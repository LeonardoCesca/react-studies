import React from 'react'
import ReactDOM from 'react-dom'
import Membro from './componentes/Membro'
import Familia from './componentes/Familia'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
       <Familia>
           <Membro nome='Leonardo' sobrenome='Cesca'/>
           <Membro nome='Tais' sobrenome='Cesca'/>
       </Familia>
       <Familia>
           <Membro nome='Leandro' sobrenome='Garcia'/>
           <Membro nome='Eledi' sobrenome='Garcia'/>
       </Familia>
    </div>
    , elemento)