import React from 'react';
import { Link } from "react-router-dom";
import '../styles/SignUpForm.scss';
import { Eye, EyeOff } from 'lucide-react';
import statesEnum from '../types/StatesEnum';

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
                    <input id='password' type={passwordToggler ? 'text' : 'password'} placeholder='Digite sua senha'></input>
                    {passwordToggler ? <Eye onClick={togglePassword} className='toggle-password' /> : 
                        <EyeOff onClick={togglePassword} className='toggle-password' /> }
                </span>
            </div>
            <div>
                <label htmlFor='password-confirm'>Confirmar Senha:</label>
                <span className='signup-form__password'>
                    <input id='password-confirm' type={passwordToggler ? 'text' : 'password'} placeholder='Digite sua senha'></input>
                    {passwordToggler ? <Eye onClick={togglePassword} className='toggle-password' /> : 
                        <EyeOff onClick={togglePassword} className='toggle-password' /> }
                </span>
            </div>
            <div>
                <label htmlFor='phone'>Telefone:</label>
                <input type='text' id='phone' placeholder='(xx) xxxxx-xxxx' autoComplete='tel' />
            </div>
            <div>
                <label htmlFor='birthdate'>Data de Nascimento:</label>
                <input type='date' id='birthdate' placeholder='dd/mm/aaaa' />
            </div>
            <div className='signup-form__state'> 
                <label htmlFor='state'>Estado:</label>
                <select id='state'>
                    {Object.values(statesEnum).map((state) => (
                        <option key={state.value} value={state.value}>
                            {state.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <span className='signup-form__radio'>
                    <input type='radio' name='role' id='freelancer' value='freelancer' checked />
                    <label htmlFor='freelancer' className='signup__radio__label' >Freelancer</label>
                </span>
                <span className='signup-form__radio'>
                    <input type='radio' name='role' id='client' value='cliente' />
                    <label htmlFor='client' className='signup__radio__label' >Cliente</label>
                </span>
            </div>
            <div className='signup-form__send'>
                <button type='submit'>Enviar</button>
            </div>
            <div className='signup-form__footer'>
                <p>Já tem uma conta? <Link to='/signin'>Faça login</Link></p>
            </div>
        </form>
    );
}  

export default SignUpForm;