import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Leonardo', 'Victória'];

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}