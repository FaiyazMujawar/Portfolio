import './App.css';
import ContactBar from './components/contactbar';
import Home from './components/home';
import NavBar from './components/navbar';
import Section from './components/section';

function App() {
  return (
    <div className='App'>
      <ContactBar />
      <Section heading={'Home'}>
        <Home />
      </Section>
      <NavBar />
    </div>
  );
}

export default App;
