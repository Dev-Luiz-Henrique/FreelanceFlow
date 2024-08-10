import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/SignIn.scss";
import logo from "../assets/images/logo.png";

const SignIn = () => {
    return (
        <main className='signin'>
            <section>
                <span className='signin__header'>
                    <img src={logo} alt='' />
                    <p>FreelanceFlow</p>
                </span>
                <div className='signin__with'>
                    <button>Continuar com Google</button>
                    <button>Continuar com Linkedin</button>
                </div>
                <p>ou</p>
                <form>
                    <div>
                        <input type='text' placeholder='Digite seu Email' />
                        <input type='password' placeholder='Digite sua Senha' />
                    </div>
                    <p>
                        <a href='/'>Esqueceu sua senha?</a>
                    </p>
                    <div>
                        <button className='secondary-button' type='submit'>Entrar</button>
                        <Link to="/signup">
                            <button className='secondary-button'>Inscreva-se</button>
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
