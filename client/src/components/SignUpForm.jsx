import React from 'react';
import '../assets/styles/SignUpForm.scss';
import { Eye, EyeOff } from 'lucide-react';

const SignUpForm = () => {
    const [passwordToggler, setPasswordToggler] = React.useState(false);
    const togglePassword = () => {
        setPasswordToggler(!passwordToggler);
    };
    
    return (
        <form className='signup-form'>
            <p>Cadastro</p>
            <div>
                <label htmlFor='name'>Nome Completo:</label>
                <input type='text' id='name' placeholder='Digite seu nome completo' autoComplete='name' autoFocus />
            </div>
            <div>
                <label htmlFor='username'>Nome de Usuário:</label>
                <input type='text' id='username' placeholder='Digite seu nome de usuário' autoComplete='username' />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' placeholder='Digite seu email' autoComplete='email' />
            </div>
            <div>
                <label htmlFor="email-confirm">Confirmar Email:</label>
                <input type='email' id='email-confirm' placeholder='Confirme seu email' />
            </div>
            <div>
                <label htmlFor='password'>Senha:</label>
                <span className='signup-form__password'>
                    <input type={passwordToggler ? 'text' : 'password'} placeholder='Digite sua senha'></input>
                    <button type='button' onClick={togglePassword} className='toggle-password'>
                        {passwordToggler ? <Eye /> : <EyeOff /> }
                    </button>
                </span>
            </div>
            <div>
                <label htmlFor='password-confirm'>Confirmar Senha:</label>
                <input type='password' id='password-confirm' placeholder='Confirme sua Senha' />
            </div>
            <div>
                <label htmlFor='phone'>Telefone:</label>
                <input type='number' id='phone' placeholder='(xx) xxxxx-xxxx' autoComplete='tel' />
            </div>
            <div>
                <label htmlFor='birthdate'>Data de Nascimento:</label>
                <input type='date' id='birthdate' placeholder='dd/mm/aaaa' />
            </div>
            <div>
                <label htmlFor='state'>Estado:</label>
                <input type='text' id='state' placeholder='Digite seu estado' />
            </div>

            <div>
                <span className='signup-form__radio'>
                    <input type='radio' name='role' id='freelancer' value='freelancer' />
                    <label htmlFor='freelancer' className='signup__radio__label' >Freelancer</label>
                </span>
                <span className='signup-form__radio'>
                    <input type='radio' name='role' id='client' value='cliente' />
                    <label htmlFor='client' className='signup__radio__label' >Cliente</label>
                </span>
            </div>
            <button type="submit">enviar</button>
        </form>
    );
}

export default SignUpForm;