import {
  AiOutlineLinkedin,
  MdOutlineMail,
  AiOutlineGithub,
  FiTwitter,
} from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { setNavItem } from '../../store/NavbarSlice';
import './styles.css';

function ContactBar() {
  const dispatch = useDispatch();
  return (
    <div className='contact-bar'>
      <div
        className='name'
        onClick={() =>
          dispatch(setNavItem({ navItem: 'HOME', navItemName: 'Home' }))
        }
      >
        faiyazmujawar
      </div>
      <div className='nav-links'>
        <a href='mailto:mujawar.faiyaz.aziz@gmail.com' target={'_tab'}>
          <MdOutlineMail className='icon p-2' size={'40px'} />
        </a>
        <a href='https://www.linkedin.com/in/faiyaz-mujawar' target={'_tab'}>
          <AiOutlineLinkedin className='icon p-2' size={'40px'} />
        </a>
        <a href='https://github.com/FaiyazMujawar' target={'_tab'}>
          <AiOutlineGithub className='icon p-2' size={'40px'} />
        </a>
        <a href='https://twitter.com/_faiyazmujawar_' target={'_tab'}>
          <FiTwitter className='icon p-2' size={'40px'} />
        </a>
      </div>
    </div>
  );
}

export default ContactBar;
