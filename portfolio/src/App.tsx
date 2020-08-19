import React/* , { useState } */ from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "tachyons";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Profile from './Profile'; 
// import { Todo } from './types'; //When using types.ts 

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" render={() => <About />} />  
        <Route exact path="/profile" render={() => <Profile />} />  
        <Route exact path="/projects" render={() => <Projects />} />  
        <Route exact path="/contact" render={() => <Contact />} />        
      </Router>
      <Footer />
    </>
  );
}

export default App;
