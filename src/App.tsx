import './App.css';
import ContactBar from './components/contactbar';
import NavBar, { NavbarItems } from './components/navbar';
import Section from './components/section';

function App() {
  return (
    <div className='App'>
      <ContactBar />
      <Section heading={'Home'}></Section>
      <NavBar />
    </div>
  );
}

export default App;
