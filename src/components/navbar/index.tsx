import NavItem from '../navitem';
import './styles.css';
export type NavbarItems = 'HOME' | 'ABOUT' | 'EXPERIENCE' | 'SKILLS';

function NavBar() {
  return (
    <div className='navbar d-flex justify-content-center p-3'>
      <NavItem item='HOME' name='Home' tooltipPosition='left' />
      <NavItem item='ABOUT' name='About' tooltipPosition='bottom' />
      <NavItem item='EXPERIENCE' name='Experience' tooltipPosition='bottom' />
      <NavItem item='SKILLS' name='Skills' tooltipPosition='right' />
    </div>
  );
}

export default NavBar;
