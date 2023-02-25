import Organization, { Org } from './org';
import Project from './project';
import './styles.css';

import organizations from './orgs.json';
import projects from './projects.json';
import { keyGenerator } from '../../utils';
import { Divider, Timeline } from 'antd';
import { RiLoader4Line } from 'react-icons/all';

const key = keyGenerator();
function Experience() {
  return (
    <div className='experience'>
      <div>
        <h3 className='pb-3'>Where have I worked?</h3>
        <Timeline
          mode='left'
          pending={true}
          pendingDot={
            <RiLoader4Line
              color='var(--secondary)'
              size={15}
              className='rotation'
            ></RiLoader4Line>
          }
          items={organizations.map(timelineChild)}
        />
        <Divider />
        <h4 className='mb-3'>Personal Projects</h4>
        <div className='projects'>
          {projects.map((project) => {
            return <Project key={key.next().value!} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

function timelineChild(org: Org) {
  return {
    label: (
      <div>
        {`${org.start}`} &nbsp; — &nbsp; {`${org.end ?? 'Present'}`}
      </div>
    ),
    color: 'var(--secondary)',
    children: <Organization organization={org} />,
  };
}

export default Experience;
