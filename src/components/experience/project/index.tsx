import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import '../styles.css';

export interface IProject {
  name: string;
  description: string;
  repository: string;
  image: string;
  techStack: string[];
}

interface ProjectProps {
  project: IProject;
}

function Project({ project }: ProjectProps) {
  return (
    <div className='project'>
      <Card sx={{ minHeight: '300px' }}>
        <CardMedia
          sx={{ textAlign: 'center', overflowY: 'hidden', height: '200px' }}
        >
          <img src={project.image} alt='image' width={'100%'} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {project.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <a href={project.repository} target='_tab'>
              View on Github
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project;
