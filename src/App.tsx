import './App.css';
import ContactBar from './components/contactbar';
import Section from './components/section';

function App() {
  return (
    <div className='App'>
      <ContactBar />
      <Section>
        <h1>Home</h1>
      </Section>
    </div>
  );
}

export default App;
