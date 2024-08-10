import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Slider from "./components/Slider.jsx";
// import Projects from './pages/Projects.jsx';
// import ProjectBrowser from './pages/ProjectsBrowser.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/slider' element={<Slider />} />
            </Routes>
        </Router>
    );
}

export default App;