import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alterarNumero = (dif) => {
        this.setState({
            numero: this.state.numero + dif
        })
    }

    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}

//Solução 1 - (Bind)

// constructor(props) {
    // super(props)
    // this.maisUm = this.maisUm.bind(this)    
// }


//Solução 2 (Função Arrow (onClick))

//<button onClick={this.maisUm}>Inc</button>

//Solução 3 (Função Arrow)

// maisUm = () => {
        // this.props.numero++
    //     console.log(this)
    // }
