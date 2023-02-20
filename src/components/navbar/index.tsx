import NavItem from '../navitem';
import './styles.css';
export type NavbarItems = 'HOME' | 'ABOUT' | 'EXPERIENCE' | 'SKILLS';

function NavBar() {
  return (
    <div className='navbar d-flex justify-content-center p-3'>
      <NavItem item='HOME' name='Home' />
      <NavItem item='ABOUT' name='About' />
      <NavItem item='EXPERIENCE' name='Experience' />
      <NavItem item='SKILLS' name='Skills' />
    </div>
  );
}

export default NavBar;
