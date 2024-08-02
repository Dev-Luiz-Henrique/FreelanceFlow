import React from "react";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import "../assets/styles/SignUp.css";
import backgroundImage from "../assets/images/signup-background.png";

const SignUp = () => {
    return (
        <>
            <Header />
            <main>
                <SignUpForm />
                <div id="signup-back-img">
                    <img src={backgroundImage} alt="" />
                </div>
            </main>
        </>
    );
};

export default SignUp;
