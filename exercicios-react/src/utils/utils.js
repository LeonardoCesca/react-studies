import React from 'react'

export function filhosComProps(props) {
    return React.Children.map(props.children, componenteFilho => {
        return React.cloneElement(props.children, { ...props })
    })
}