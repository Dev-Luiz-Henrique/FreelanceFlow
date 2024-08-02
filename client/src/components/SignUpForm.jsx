import React from 'react';
import '../assets/styles/SignUpForm.css';

const SignUpForm = () => {
    return (
        <form className='signup-form'>
            <h1>Cadastro</h1>
            <div>
                <label for='name'>Nome Completo:</label>
                <input type='text' name='name' placeholder='Digite seu nome completo' autofocus/>
            </div>
            <div>
                <label for='username'>Nome de Usuário:</label>
                <input type='text' name='username' placeholder='Digite seu nome de usuário'/>
            </div>
            <div>
                <label for='email'>Email:</label>
                <input type='text' name='email' placeholder='Digite seu email' />
            </div>
            <div>
                <label for='email-confirm'>Confirmação de Email:</label>
                <input type='text' name='email-confirm' placeholder='Confirme seu email' />
            </div>
            <div>
                <label for='password'>Senha:</label>
                <input type='password' name='password' placeholder='Digite sua senha' />
            </div>
            <div>
                <label for='passwordConfirm'>Confirmação de Senha:</label>
                <input type='password' name='password-confirm' placeholder='Confirme sua Senha' />
            </div>
            <div>
                <label for='phone'>Telefone:</label>
                <input type='number' name='phone' placeholder='(xx) xxxxx-xxxx' />
            </div>
            <div>
                <label for='birth-date'></label>
                <input type='date' name='birth-date' placeholder='dd/mm/aaaa' />
            </div>
            <div>
                <label for='state'>Estado:</label>
                <input type='text' name='state' placeholder='Digite seu estado' />
            </div>
            <div>
                <div>
                    <input type='radio' name='type-user' value='freelancer'/>
                    <label for='freelancer'>Freelancer</label>
                </div>
                <div>
                    <input type='radio' name='type-user' value='cliente'/>
                    <label for='cliente'>Cliente</label>
                </div>
            </div>
            <button type="submit">enviar</button>
        </form>
    );
}

export default SignUpForm;