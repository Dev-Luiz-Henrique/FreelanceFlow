import React from 'react';
import '../assets/styles/Home.scss';
import homeMenuImg from '../assets/images/home-menu.png';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
      <main className='home'>
        <section className='home__info'>
            <img src={logo} alt="" />
            <h1>FreelanceFlow</h1>
            <p>Onde talentos e oportunidades se encontram!</p>
            <span>
                <button>Cadastre-se</button>
                <button>Saiba mais</button>
            </span>

            <div>
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
                <button>Login</button>
                <button>Inscreva-se</button>
            </span>
        </section>
        
        
        






















        
        {/* <section className='home__data'>
            <div>
                <p className='home__logo'>f</p>
                <h1>FreelanceFlow</h1> 
            </div>
            <h2>Onde talentos e oportunidades se encontram!</h2>

            <div className='home__buttons'>
                <button>Cadastrar-me</button>
                <button id='home__buttons--accent-color'>Saiba mais</button> 
            </div>
            

            <div  className='home__info'>
                <div>
                    <h4>Procure por projetos</h4>
                    <p>Escolha os projetos que mais combinam com você</p>
                </div>
                <div>
                    <h4>Escolha um Especialista</h4>
                    <p>Tome decisões baseadas em avaliações e portfólios</p>
                </div>
                <div>
                    <h4>Comunique-se</h4>
                    <p>Utilize as infomações de contato para ter conversas incriveis</p>
                </div>
            </div>        
        </section>      

        <section className='home__'>
            <div className='home__sign'>
                <button>Entrar</button> 
                <button>Inscrever-se</button> 
            </div>
            <div className='home__image'>
                <img src={homeMenu}></img>
            </div>   
        </section> */}
      </main>
  );
};

export default Home;
