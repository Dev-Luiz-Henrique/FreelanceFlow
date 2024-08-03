import React from "react";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import "../assets/styles/SignUp.scss";
import backgroundImage from "../assets/images/signup-background.png";

const SignUp = () => {
    return (
        <>
            <Header />
            <main className='signup'>
                <SignUpForm />
                <div className='signup__img'>
                    <img src={backgroundImage} alt="imagem :)" />
                </div>
            </main>
        </>
    );
};

export default SignUp;
