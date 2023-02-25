import './styles.css';

function Home() {
  return (
    <div className='home'>
      <div className='profile-img'>
        <img src='/profile.jpeg' alt='profile-img' />
      </div>
      <div className='name'>
        <h6>I'm</h6>
        <h1 className='firstname'>Faiyaz</h1>
        <h1 className='lastname'>Mujawar</h1>
        <h6>SOFTWARE ENGINEER</h6>
      </div>
    </div>
  );
}

export default Home;
