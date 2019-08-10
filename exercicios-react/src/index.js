import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB as B} from './componentes/DoisComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        {<PrimeiroComponente valor='x'/>}
        <CompA valor="Olá eu sou o componente A"/>
        <B valor="Olá eu sou componente B" />
    </div>
    , elemento)