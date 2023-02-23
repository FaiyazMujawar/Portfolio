import { Divider } from '@mui/material';
import Timeline from '../timeline';
import Organization, { Org } from './org';
import Project from './project';
import './styles.css';

import organizations from './orgs.json';
import projects from './projects.json';
import { keyGenerator } from '../../utils';

const key = keyGenerator();
function Experience() {
  return (
    <div className='experience'>
      <h3>Where have I worked?</h3>
      <Timeline pending={true} children={organizations.map(timelineChild)} />
      <h4 className='mb-3'>Personal Projects</h4>
      <div className='projects'>
        {projects.map((project) => {
          return <Project key={key.next().value!} project={project} />;
        })}
      </div>
    </div>
  );
}

function timelineChild(org: Org) {
  return {
    label: `${org.start} - ${org.end ?? 'Present'}`,
    content: <Organization organization={org} />,
  };
}

export default Experience;
