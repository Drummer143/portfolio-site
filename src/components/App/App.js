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
                <Route path="/portfolio-site/about" element={<About />} />
                <Route path="/portfolio-site/portfolio" element={<Portfolio />} />
                <Route path="/*" element={<Navigate to="/portfolio-site/about" replace />} />
            </Routes>
        </div>
    );
}

export default App;
