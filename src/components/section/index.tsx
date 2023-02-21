import './styles.css';

function Section({ heading, children }: any) {
  return (
    <div className='section rounded-3 shadow-lg'>
      {/* <h4>{heading}</h4> */}
      {children}
    </div>
  );
}

export default Section;
