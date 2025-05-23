import React from 'react';
import Hero from './components/Hero';
import { ThemeProvider } from './context/ThemContext';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero/> 
      <Services/>
      <About/>
      <Contact/>
      {/* Add other components here */}
    </div>
  )

}

export default App;