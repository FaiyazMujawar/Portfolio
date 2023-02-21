import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import About from './components/about';
import ContactBar from './components/contactbar';
import Home from './components/home';
import NavBar, { NavbarItems } from './components/navbar';
import Section from './components/section';
import './App.css';
import Experience from './components/experience';

function App() {
  const currentNavItem: NavbarItems = useSelector(
    (state: any) => state.navbar.currentNavItem
  );

  const currentNavItemName: string = useSelector(
    (state: any) => state.navbar.currentNavItemName
  );

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const components = {
    HOME: <Home />,
    ABOUT: <About></About>,
    EXPERIENCE: <Experience />,
    SKILLS: <div></div>,
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='App'>
        <ContactBar />
        <Section heading={currentNavItemName}>
          {components[currentNavItem]}
        </Section>
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
