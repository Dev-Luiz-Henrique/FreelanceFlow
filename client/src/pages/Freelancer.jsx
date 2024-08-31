import { useState, useEffect } from "react";
import Header from "../components/Header";

const SignUp = () => {
    const [freelancers, setFreelancers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/freelancers");
                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const fetchedData = await response.json();
                setFreelancers(fetchedData);
            } catch (error) {
                console.error("Error fetching freelancers:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            {freelancers.length > 0 && (
                <main className='freelancer'>
                    <ul>
                        {freelancers.map((freelancer) => (
                            <li key={freelancer.id}>
                            <strong>Nome:</strong> {freelancer.name}
                            <br />
                            <strong>Usuário:</strong> {freelancer.username}
                            <br />
                            <strong>Email:</strong> {freelancer.email}
                            <br />
                            <strong>Telefone:</strong> {freelancer.phone}
                            <br />
                            <strong>Estado:</strong> {freelancer.state}
                            <br />
                            <strong>Data de Nascimento:</strong> {freelancer.birthDate}
                            {/* Adicione mais propriedades aqui conforme necessário */}
                          </li>
                        ))}
                    </ul>
                </main>
            )}
        </>
    );
};

export default SignUp;
