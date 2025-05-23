import React from 'react';
import Hero from './components/Hero';
import Services from './components/services';
import About from './components/about';
import ContactMe from './components/ContacMe';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero/> 
      <Services/>
      <About/>
      <ContactMe/>
      {/* Add other components here */}
    </div>
  )
}

export default App;