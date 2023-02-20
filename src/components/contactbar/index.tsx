import { AtSign, GitHub, Linkedin, Mail, Twitter } from 'react-feather';
import './styles.css';

function ContactBar() {
  return (
    <div className='contact-bar w-100 d-flex p-2'>
      <div className='name'>faiyazmujawar</div>
      <div>
        <a href='mailto:mujawar.faiyaz.aziz@gmail.com' target={'_tab'}>
          <AtSign className='icon p-2' size={'35px'} />
        </a>
        <a href='https://www.linkedin.com/in/faiyaz-mujawar' target={'_tab'}>
          <Linkedin className='icon p-2' size={'35px'} />
        </a>
        <a href='https://github.com/FaiyazMujawar' target={'_tab'}>
          <GitHub className='icon p-2' size={'35px'} />
        </a>
        <a href='https://twitter.com/_faiyazmujawar_' target={'_tab'}>
          <Twitter className='icon p-2' size={'35px'} />
        </a>
      </div>
    </div>
  );
}

export default ContactBar;
