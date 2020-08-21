import React/* , { useState } */ from 'react';
import "tachyons";
import Header from './Components/Header';
import About from './Components/About';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Profile from './Profile'; 
// import { Todo } from './types'; //When using types.ts 

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/about" />} />  
        <Route path="/about" render={() => <About />} />
        <Route path="/profile" render={() => <Profile />} />  
        <Route path="/projects" render={() => <Projects />} />  
        <Route path="/contact" render={() => <Contact />} />        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
