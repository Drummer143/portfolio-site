import { NavLink } from 'react-router-dom';

import './NavPanel.css';

function NavPanel() {
    return (
        <nav className="navPanel">
            <div className="links">
                <NavLink to="portfolio-site/about" className="link">
                    <h2>About</h2>
                </NavLink>
                <NavLink to="portfolio-site/portfolio" className="link">
                    <h2>Portfolio</h2>
                </NavLink>
            </div>
        </nav>
    );
}

export default NavPanel;
