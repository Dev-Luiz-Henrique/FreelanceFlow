import React from "react";
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
                <div>
                    <button>Continuar com Google</button>
                    <button>Continuar com Linkedin</button>
                </div>
                <p>Ou</p>
                <form>
                    <input type='text' placeholder='Digite seu Email' />
                    <input type='password' placeholder='Digite sua Senha' />
                    <p>
                        <a href='/'>Esqueceu sua senha?</a>
                    </p>
                </form>
                <div>
                    <button>Entrar</button>
                    <button>Inscreva-se</button>
                </div>
            </section>
        </main>
    );
};

export default SignIn;
