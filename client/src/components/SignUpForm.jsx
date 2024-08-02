import React from 'react';
import '../assets/styles/SignUpForm.css';

const SignUpForm = () => {
    return (
        <form className="signup-form">
            <div id='name-section'>
                <h1>Cadastro</h1>
                <p>Nome Completo:</p>
                <input type="text" placeholder="Nome Completo" />
            </div>
            <div id='user-name-section'>
                <p>Nome de Usuário:</p>
                <input type="text" placeholder="Nome de Usuário" />
            </div>
            <div id='cpf-section'>
                <p>CPF:</p>
                <input type="text" placeholder="CPF" />
            </div>
            <div id='telephone-section'>
                <p>Telefone:</p>
                <input type="text" placeholder="(11) 99999999" />
            </div>
            <div id='birth-section'>
                <p>Data de Nascimento:</p>
                <input type="text" placeholder="dd/mm/aaaa" />
            </div>
            <div id='state-section'>
                <p>Estado:</p>
                <input type="text" placeholder="Estado" />
            </div>
            <div id='email-section'>
                <p>Email:</p>
                <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div id='email-confirmation-section'>
                <p>Confirmação de Email:</p>
                <input type="text" placeholder="abc@gmail.com" />
            </div>
            <div id='password-section'>
                <p>Senha:</p>
                <input type="password" placeholder="Senha" />
            </div>
            <div id='password-confirmation-section'>
                <p>Confirmação de Senha:</p>
                <input type="password" placeholder="Senha" />
            </div>
            <button type="submit">enviar</button>
        </form>
    );
}

export default SignUpForm;