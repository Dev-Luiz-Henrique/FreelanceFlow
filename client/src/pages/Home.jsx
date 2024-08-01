import React from 'react';
import '../assets/styles/Home.css';
import loginSectionImg from '../assets/images/login-section.png';

/*
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Error from '../components/Error';
import Loader from '../components/Loader';*/

const Home = () => {
  
    return (
    <>
      <main>
        <section id="main-section">
            <div id="container-logo">
                <p>f</p>
                <h1>FreelanceFlow</h1>
            </div>
            <h2>Onde talentos e oportunidades se encontram!</h2>         
                
            <div id="main-buttons">
                <button>Cadastrar-me</button> 
                <button id="btn-learn-more">Saiba mais</button> 
            </div>

            <div id="grid">
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

        <section id="login-section">
            <div id="login-buttons">
                <button>Entrar</button> 
                <button>Inscrever-se</button> 
            </div>
            <div id="image-container">
                <img className='login-SectionImg' src={loginSectionImg}></img>
            </div>   
        </section>
    </main>
    </>
  );
};

export default Home;