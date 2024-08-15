import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default App;