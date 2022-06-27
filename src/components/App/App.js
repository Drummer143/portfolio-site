import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../aboutPage/About/About';

import NavPanel from '../NavPanel/NavPanel';

import './App.css';
import Portfolio from '../portfolioPage/Portfolio/Portfolio';

function App() {
    return (
        <div className="app">
            <NavPanel />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/*" element={<Navigate to="/about" replace />} />
            </Routes>
        </div>
    );
}

export default App;
