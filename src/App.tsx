import { useSelector } from 'react-redux';
import About from './components/about';
import ContactBar from './components/contactbar';
import Home from './components/home';
import { NavbarItems } from './components/navbar';
import Section from './components/section';
import Experience from './components/experience';
import { theme, ConfigProvider } from 'antd';
import './App.css';
import Skills from './components/skills';

function App() {
  const currentNavItem: NavbarItems = useSelector(
    (state: any) => state.navbar.currentNavItem
  );

  const currentNavItemName: string = useSelector(
    (state: any) => state.navbar.currentNavItemName
  );

  const HOME = <Home />;
  const ABOUT = <About />;
  const EXPERIENCE = <Experience />;
  const SKILLS = <Skills />;

  const components = {
    HOME,
    ABOUT,
    EXPERIENCE,
    SKILLS,
  };

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <div className='App'>
        <ContactBar />
        <Section heading={currentNavItemName}>
          {components[currentNavItem]}
        </Section>
        {/* <NavBar /> */}
      </div>
    </ConfigProvider>
  );
}

export default App;
