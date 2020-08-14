import React/* , { useState } */ from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import Profile from './Profile'; 
// import { Todo } from './types'; //When using types.ts 

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />  
      <Profile />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
