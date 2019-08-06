import React, { useState } from 'react';

const NovoGenero = () => {
    return (
        <div className='container'>
            <h1>Novo Genero</h1>
            <form>
                <div class='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
                    <small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>
            </form>
        </div>
    )
}

export default NovoGenero