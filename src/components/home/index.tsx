import { Divider } from 'antd';
import './styles.css';

function Home() {
  return (
    <div className='home h-100 d-flex'>
      <div className='profile-img'>
        {/* todo: enhace image */}
        <img  src='/profile1.png' alt='profile-img' />
      </div>
      <div className='name d-flex justify-content-center flex-column p-5'>
        <h5>I'm</h5>
        <h1 className='firstname'>Faiyaz</h1>
        <h1 className='lastname'>Mujawar</h1>
        <h6>SOFTWARE ENGINEER</h6>
      </div>
    </div>
  );
}

export default Home;
