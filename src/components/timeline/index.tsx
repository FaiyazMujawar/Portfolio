import { ReactNode } from 'react';
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from '@mui/lab';
import { keyGenerator } from '../../utils';

interface TimelineChild {
  label?: ReactNode;
  content: ReactNode;
}

interface TimelineProps {
  children: TimelineChild[];
  pending?: boolean;
}

const key = keyGenerator();

function Timeline({ children, pending }: TimelineProps) {
  const hasOppositContent = children.some((child) => child.label != undefined);
  return (
    <div>
      <MuiTimeline
        sx={{
          [hasOppositContent
            ? `& .${timelineOppositeContentClasses.root}`
            : `& .${timelineItemClasses.root}:before`]: {
            flex: hasOppositContent ? 0.3 : 0,
          },
        }}
      >
        {getTimeineChildren(children, pending)}
        {pending && (
          <TimelineItem key={key.next().value!}>
            <TimelineOppositeContent color='textSecondary'></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: 'transparent',
                  border: '2px solid #f05d5e',
                  borderTop: 0,
                  borderRight: 0,
                  animation: 'rotation 2s infinite linear',
                }}
              />
            </TimelineSeparator>
            <TimelineContent className='pb-4'></TimelineContent>
          </TimelineItem>
        )}
      </MuiTimeline>
    </div>
  );
}

function timelineChild(child: TimelineChild, extendConnector: boolean = false) {
  return (
    <TimelineItem key={key.next().value!}>
      {child.label != undefined && (
        <TimelineOppositeContent color='textSecondary'>
          {child.label}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineDot
          sx={{ backgroundColor: 'transparent', border: '2px solid #f05d5e' }}
        />
        {extendConnector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className='pb-4'>{child.content}</TimelineContent>
    </TimelineItem>
  );
}

function getTimeineChildren(
  children: TimelineChild[],
  pending: boolean = false
) {
  if (children.length == 0) return [];
  const components = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    components.push(timelineChild(child, i !== children.length - 1 || pending));
  }
  return components;
}

export default Timeline;
