import React, { useState } from 'react';

const NovoGenero = () => {
    return (
        <div className='container'>
            <h1>Novo Genero</h1>
            <form>
                <div class='form-group'>
                    <label for='name'>Nome </label>
                    <input type='text' className='form-control' id='name' placeholder='Nome do Genero' />
                </div>
            </form>
        </div>
    )
}

export default NovoGenero