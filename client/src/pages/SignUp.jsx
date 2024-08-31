import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import "../styles/SignUp.scss";

const SignUp = () => {
    return (
        <>
            <Header />
            <main className='signup'>
                <SignUpForm />
                <section className='signup__info'>
                    <div className='signup__content'>
                        <h1>FreelanceFlow</h1>
                        <p>Onde Talentos e Oportunidades se Encontram!</p>
                        <div className='signup__cards'>
                            <div className='signup__cards__card'>
                                <p className='signup__cards__card__title'>
                                    Escolha um Especialista
                                </p>
                                <p className='signup__cards__card__text'>
                                    Tome decisões baseadas em avaliações a
                                    portifólio
                                </p>
                            </div>
                            <div className='signup__cards__card'>
                                <p className='signup__cards__card__title'>
                                    Comunique-se
                                </p>
                                <p className='signup__cards__card__text'>
                                    Utilize as informações de contato para ter
                                    conversas incríveis
                                </p>
                            </div>
                            <div className='signup__cards__card'>
                                <p className='signup__cards__card__title'>
                                    Procure por projetos
                                </p>
                                <p className='signup__cards__card__text'>
                                    Escolha os projetos que mais combinam com
                                    você
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default SignUp;
