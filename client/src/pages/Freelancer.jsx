import { useState, useEffect } from "react";
import statesEnum from "../types/StatesEnum";
import Header from "../components/Header";

const SignUp = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/teste");  
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();          
    }, []);

    return (
        <>
            <Header />
            <main className='freelancer'>
                {data.length > 0 && (
                    <ul>
                        {data.map((item, index) => (
                            <li>{item.id} - {item.name}</li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
};

export default SignUp;
