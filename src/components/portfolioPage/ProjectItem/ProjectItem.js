import { useState } from 'react';

import './ProjectItem.css'

function ProjectItem({ projectName, image, linkToGithub, linkToSite }) {
    const [linksDisplay, setLinksDisplay] = useState('none');

    return (
        <div style={{ backgroundImage: `url(${image})` }} className='item' onMouseEnter={() => setLinksDisplay('block')} onMouseLeave={() => setLinksDisplay('none')}>
            <h3>{projectName}</h3>

            <div className='buttons' style={{ display: linksDisplay }}>
                <a href={linkToSite} rel='noreferrer' target="_blank">Go to site</a>
                <a href={linkToGithub} rel='noreferrer' target="_blank">Go to github</a>
            </div>
        </div>
    );
}

export default ProjectItem;