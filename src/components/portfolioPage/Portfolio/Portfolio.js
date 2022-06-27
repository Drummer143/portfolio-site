import ProjectItem from '../ProjectItem/ProjectItem';
import { projects } from './../../../projects';

import './Portfolio.css';

function Portfolio() {
    const mappedProjects = projects.map(item => (
        <ProjectItem {...item} /* projectName={item.projectName} image={item.image} */ />
    ));

    return (
        <div className="wrapper">
            <h1>My projects</h1>

            <div className="projects">{mappedProjects}</div>
        </div>
    );
}

export default Portfolio;
