import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

import './StartScreen.css';

function StartScreen() {
    return (
        <div className="startScreen">
            <h1 className="heading">HI, I AM EVGENY</h1>
            <p className="subHeading">Young man who loves programming</p>
            <div className="socials">
                <a href="https://github.com/Drummer143" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/evgeny-berg-8b476a241/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a href="https://tlgg.ru/zero_motivation" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faTelegram} className="icon" />
                </a>
            </div>
        </div>
    );
}

export default StartScreen;
