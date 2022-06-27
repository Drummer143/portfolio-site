import { NavLink } from 'react-router-dom';

import './NavPanel.css'

function NavPanel() {
    return (
        <nav className="navPanel">
            <div className='links'>
                <NavLink to='about' className='link'><h2>About</h2></NavLink>
                <NavLink to='portfolio' className='link'><h2>Portfolio</h2></NavLink>
                <NavLink to='experience' className='link'><h2>Experience</h2></NavLink>
            </div>
        </nav>
    );
}

export default NavPanel;