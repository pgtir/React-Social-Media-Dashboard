import  { useState } from 'react';
import Header from './components/Header';
import FollowerSection from './components/FollowerSection';
import OverviewSection from './components/OverviewSection';

function App() {
  const [theme, setTheme] = useState('dark');
  const themeSwitchHandler = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
 return (
  <main data-theme={theme}>
    <div className="container py-4 pb-0" >
    <Header 
    themeSwitcher = {themeSwitchHandler}
    toggleTo = {theme}
    />
    <FollowerSection />
    <OverviewSection/>
    </div>
  </main>
 );
}

export default App;
