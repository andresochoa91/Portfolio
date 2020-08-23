import React/* , { useContext } */ from 'react';
// import { PortfolioContext } from './Context';
import "tachyons";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';

const App: React.FC = () => {
  // const { studies, experience, skills, projects } = useContext(PortfolioContext);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/about" />} />  
        <Route path="/about" render={() => <About />} />
        <Route path="/profile" render={(props) => <Profile { ...props } />} />  
        <Route path="/projects" render={() => <Projects />} />  
        <Route path="/contact" render={() => <Contact />} />        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
