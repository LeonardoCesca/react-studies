import React from 'react'
import ReactDOM from 'react-dom'
import ComponenteClasse from './componentes/ComponenteClasse'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
       <ComponenteClasse valor='Sou um componente' />
    </div>
    , elemento)