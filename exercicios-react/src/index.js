import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
       <Pai valor='Sou um componente' />
    </div>
    , elemento)