import React, { useState } from 'react';

const NovoGenero = () => {
    const [name, setName] = useState('')
    const onChange = evt => {
        setName(evt.target.value);
    }
    return (
        <div className='container'>
            <h1>Novo Genero</h1>
            <form>
                <div className='form-group'>
                    <label> Nome </label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genero' />
                </div>
                <button type='button' className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero