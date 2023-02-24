import { Timeline } from 'antd';
import { ArrowUpRight } from 'react-feather';
import education from './education.json';
import School, { ISchool } from './school';
import './styles.css';

function About() {
  return (
    <div className='about d-flex flex-column'>
      <h3>Who am I?</h3>
      <div>
        <p>
          Hey there! I'm Faiyaz, a Software Engineer based in Pune, India. I'm
          interested in application development and I always enjoy learning new
          things to improve my skills. I'm also fascinated by other computer
          science fields like the AI.
        </p>
        <p>
          Apart from the technical stuff, I'm also interested in Badminton 🏸
          and Astronomy 🔭.
        </p>
      </div>

      <h4>Education</h4>
      <Timeline mode='left' items={education.map(school)} />
      <a href='/public/resume.pdf' target={'_tab'}>
        Know more about me!
        <ArrowUpRight color='#f05d5e' size={'15px'} />
      </a>
    </div>
  );
}

function school(data: ISchool) {
  return {
    label: `${data.startYear} - ${data.endYear ?? 'Present'}`,
    children: <School school={data} />,
  };
}

export default About;
