import NavBar from '../navbar';
import './styles.css';

function Section({ children }: any) {
  return (
    <div className='section rounded-3 shadow-lg'>
      {children}
      <NavBar />
    </div>
  );
}

export default Section;
