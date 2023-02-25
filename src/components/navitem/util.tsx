import { FiUser, BiBriefcase, FiTool, BiHome } from 'react-icons/all';
import { NavbarItems } from '../navbar';

export const getNavIcon = (
  type: NavbarItems,
  color: string = 'var(--body)',
  classes: string = '',
  size: string | number = '30px'
) => {
  switch (type) {
    case 'HOME':
      return <BiHome className={classes} color={color} size={size} />;
    case 'ABOUT':
      return <FiUser className={classes} color={color} size={size} />;
    case 'EXPERIENCE':
      return <BiBriefcase className={classes} color={color} size={size} />;
    case 'SKILLS':
      return <FiTool className={classes} color={color} size={size} />;
  }
};
