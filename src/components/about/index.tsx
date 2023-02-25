import { Divider, Timeline } from 'antd';
import { ArrowUpRight } from 'react-feather';
import { FiArrowUpRight } from 'react-icons/all';
import education from './education.json';
import School, { ISchool } from './school';
import './styles.css';
// import './style.css';

function About() {
  return (
    <div className='about'>
      <div className='h-100'>
        <h3>Who am I?</h3>
        <div>
          <p>
            Hey there! I'm Faiyaz, a Software Engineer based in Pune, India. I'm
            interested in application development and I always enjoy learning
            new things to improve my skills. I'm also fascinated by other
            computer science fields like the AI.
          </p>
          <p>
            Apart from the technical stuff, I'm also interested in Badminton 🏸
            and Astronomy 🔭.
          </p>
        </div>
        <Divider />
        <h4>Education</h4>
        <Timeline mode='left' items={education.map(school)} />
        <a href='/public/resume.pdf' target={'_tab'}>
          Know more about me! <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
}

function school(data: ISchool) {
  return {
    label: (
      <div>
        {`${data.startYear}`} &nbsp; — &nbsp; {`${data.endYear ?? 'Present'}`}
      </div>
    ),
    color: 'var(--secondary)',
    children: <School school={data} />,
  };
}

export default About;
