import { Briefcase, Home, Tool, User } from 'react-feather';
import { NavbarItems } from '../navbar';

export const getNavIcon = (
  type: NavbarItems,
  color: string = '#6c757d',
  classes: string = '',
  size: string | number = '30px'
) => {
  switch (type) {
    case 'HOME':
      return <Home className={classes} color={color} size={size} />;
    case 'ABOUT':
      return <User color={color} className={classes} size={size} />;
    case 'EXPERIENCE':
      return <Briefcase color={color} className={classes} size={size} />;
    case 'SKILLS':
      return <Tool color={color} className={classes} size={size} />;
  }
};
