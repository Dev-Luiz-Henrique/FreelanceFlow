import React from "react";
import "../assets/styles/Home.scss";
import homeMenuImg from "../assets/images/home-menu.png";
import logo from "../assets/images/logo.png";

const Home = () => {
    return (
        <main className="home">
            <section className="home__info">
                <img src={logo} alt="" />
                <div className="home__info__header">
                    <h1>FreelanceFlow</h1>
                    <p>
                        Onde talentos e oportunidades se
                        <br />
                        encontram!
                    </p>
                </div>
                <span>
                    <button className="home__btn--accent">Cadastre-se</button>
                    <button className="home__btn">Saiba mais</button>
                </span>

                <div className="home__info__benefits">
                    <article>
                        <h4>Procure por projetos</h4>
                        <p>Escolha os projetos que mais combinam com você.</p>
                    </article>
                    <article>
                        <h4>Escolha um Especialista</h4>
                        <p>
                            Tome decisões baseadas em avaliações e portfólios.
                        </p>
                    </article>
                    <article>
                        <h4>Comunique-se</h4>
                        <p>
                            Utilize as infomações de contato para ter conversas
                            incriveis.
                        </p>
                    </article>
                </div>
            </section>

            <section className="home__menu">
                <span>
                    <button>Login</button>
                    <button>Inscreva-se</button>
                </span>
            </section>
        </main>
    );
};

export default Home;
