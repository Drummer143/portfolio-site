import './ProjectItem.css'

function ProjectItem({ projectName, image }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='item'>
            <h3>{projectName}</h3>
        </div>
    );
}

export default ProjectItem;