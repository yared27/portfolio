import React from 'react';
import Hero from './components/Hero';
import { ThemeProvider } from './context/ThemContext';

const App = () => {
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero/> 
    </div>
    </ThemeProvider>
  )

}

export default App;