import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.scss";
import { GoogleLoginButton, LinkedInLoginButton } from 'react-social-login-buttons';
import logo from "../assets/images/logo.png";

const socialButtonStyles = {
    width: '100%',
    borderRadius: '10px',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '1rem',
    margin: '0.5rem auto'
};

const SignIn = () => {
    return (
        <main className='signin'>
            <section>
                <header>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <p>FreelanceFlow</p>  
                </header>
                <div>
                    <GoogleLoginButton style={socialButtonStyles}>
                        Continuar com o Google
                    </GoogleLoginButton>
                    <LinkedInLoginButton style={socialButtonStyles}>
                        Continuar com o LinkedIn
                    </LinkedInLoginButton>
                </div>
                <p>ou</p>
                <form>
                    <input type='text' placeholder='Digite seu Email' />
                    <div>
                        <input type="password" placeholder="Digite sua Senha" />
                        <Link to="/">
                            <p>Esqueceu sua senha?</p>
                        </Link>
                    </div>
                    <div className='signin__login'>
                        <button className='btn-alt' type='submit'>Entrar</button>
                        <Link to="/signup">
                            <button className='btn-alt--accent'>Inscreva-se</button>
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
