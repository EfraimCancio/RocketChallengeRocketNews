import React from 'react';
import Send from '../../../public/send.png'
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
        <label htmlFor="">Insira seu e-mail:</label>
        <div className="input-container">
            <span></span>
            <input type="text" placeholder="efraimfonseca@gmail.com"/>
            <button>
                <img src={Send} alt="icone de envio" />
            </button>
        </div>
    </div>
  )
}

export default Form