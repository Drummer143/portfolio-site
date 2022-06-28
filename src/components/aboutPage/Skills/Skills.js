import './Skills.css';

function Skills() {
    return (
        <div className="skills">
            <h1>Skills</h1>

            <ul className="listOfSkills">
                <li>
                    <h2>Frontend:</h2>
                    <p>
                        HTML 5, CSS 3, JavaScript, React, SCSS, Redux, Google Firebase, React
                        Router, Formik
                    </p>
                </li>

                <li>
                    <h2>Languages:</h2>
                    <p>JavaScript, C#, C++</p>
                </li>

                <li>
                    <h2>Now learning:</h2>
                    <p>TypeScript, React Native, Vue</p>
                </li>
            </ul>
            <div></div>
        </div>
    );
}

export default Skills;
