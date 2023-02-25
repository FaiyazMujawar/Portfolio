import { Descriptions, Divider, Progress } from 'antd';
import { ReactNode } from 'react';
import { keyGenerator } from '../../utils';

import skillSet from './skillset.json';

const labelKey = keyGenerator();
const skillKey = keyGenerator();
const dividerKey = keyGenerator();

import './styles.css';

function Skills() {
  return (
    <div className='skills'>
      <Descriptions
        title={<h3>Skills</h3>}
        bordered
        column={1}
        style={{ minWidth: '500px' }}
      >
        {Object.entries(skillSet).map((entry) => (
          <Descriptions.Item
            key={'label-' + labelKey.next().value!}
            label={<h6>{entry[0]}</h6>}
            labelStyle={{ textAlign: 'center' }}
          >
            {intertwine(
              entry[1].map(Skill),
              <Divider style={{ margin: '10px 0px' }} />
            )}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
}

function Skill({
  label,
  score,
  image,
}: {
  label: ReactNode;
  score: number;
  image?: string;
}) {
  const STEPS = 5;
  return (
    <div key={'skill-' + skillKey.next().value!}>
      <div className='d-flex'>
        <span className='w-50 pe-3'>
          {image?.length ?? 0 > 0 ? <img src={image} /> : label}
        </span>
        <Progress
          className='d-flex w-50'
          percent={(score / STEPS) * 100}
          steps={STEPS}
          format={(_) => ''}
          strokeColor={'var(--secondary)'}
        />
      </div>
    </div>
  );
}

function intertwine(array: ReactNode[], toInsert: ReactNode) {
  if (array.length == 0) return [];
  const components = [];
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    components.push(
      element,
      <div key={'divider-' + dividerKey.next().value!}>{toInsert}</div>
    );
  }
  components.push(array[array.length - 1]);
  return components;
}

export default Skills;
