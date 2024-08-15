import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.scss";
import homeMenuImg from "../assets/images/home-menu.png";
import logo from "../assets/images/logo.png";

const Home = () => {
    return (
        <main className='home'>
            <section className='home__info'>
                <img src={logo} alt='' />
                <div className='home__info__header'>
                    <h1>FreelanceFlow</h1>
                    <p>
                        Onde talentos e oportunidades se
                        <br />
                        encontram!
                    </p>
                </div>
                <span>
                    <Link to='/signup'>
                        <button className='btn-alt'>Cadastre-se</button>
                    </Link>
                    <Link to='/slider'>
                        <button className='btn-alt--accent'>Saiba mais</button>
                    </Link>
                </span>

                <div className='home__info__benefits'>
                    <article>
                        <h4>Procure por projetos</h4>
                        <p>Escolha os projetos que mais combinam com você.</p>
                    </article>
                    <article>
                        <h4>Escolha um Especialista</h4>
                        <p>Tome decisões baseadas em avaliações e portfólios.</p>
                    </article>
                    <article>
                        <h4>Comunique-se</h4>
                        <p>Utilize as infomações de contato para ter conversas incriveis.</p>
                    </article>
                </div>
            </section>

            <section className='home__menu'>
                <span>
                    <Link to='/signin'>
                        <button className='btn-alt'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='btn-alt'>Inscreva-se</button>
                    </Link>
                </span>
            </section>
        </main>
    );
};

export default Home;
