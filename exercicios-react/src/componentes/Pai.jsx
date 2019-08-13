import React from 'react'
import Filho from './Filho'

export default props => {
    let lugarInformado = 'Nenhum'
    const notificarSaidaFilho =
        lugar => {
            lugarInformado = lugar
            console.log(lugar)
        }
    return (
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaidaFilho}/>
        </div>
    )
}