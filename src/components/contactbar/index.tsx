import './styles.css';

function ContactBar() {
  return (
    <div className='contact-bar d-flex justify-content-end p-3'>
      <a href='mailto:mujawar.faiyaz.aziz@gmail.com' target={'_'}>
        <i className='contact-icon px-3 fa-regular fa-envelope fa-lg'></i>
      </a>
      <a href='https://www.linkedin.com/in/faiyaz-mujawar' target={'_'}>
        <i className='contact-icon px-3 fa-brands fa-linkedin fa-lg'></i>
      </a>
      <a href='https://github.com/FaiyazMujawar' target={'_'}>
        <i className='contact-icon px-3 fa-brands fa-github fa-lg'></i>
      </a>
      <a href='https://twitter.com/_faiyazmujawar_' target={'_'}>
        <i className='contact-icon px-3 fa-brands fa-twitter fa-lg'></i>
      </a>
    </div>
  );
}

export default ContactBar;
