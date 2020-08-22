import React, { useEffect, useState } from 'react';
import "tachyons";
import Header from './Components/Header';
import About from './Components/About';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';



const App: React.FC = () => {
  const [ studies, setStudies ] = useState<Array<Studies>>([]);
  const [ experience, setExperience ] = useState<Array<Experience>>([]);
  const [ skills, setSkills ] = useState<Array<Skills>>([]);
  const apiKey: string = "keyBeXZyPUF8I8G0u"


  useEffect(() => {
    fetch(`https://api.airtable.com/v0/appkh2au2vrFCqrR6/Table%201?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setStudies(data.records.map((study: any) => {
        return {...study.fields, id: study.id};  
      }));
    })

    fetch(`https://api.airtable.com/v0/appkh2au2vrFCqrR6/Table%202?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setExperience(data.records.map((exp: any) => {
        return {...exp.fields, id: exp.id};  
      }));
    });

    fetch(`https://api.airtable.com/v0/appkh2au2vrFCqrR6/Table%203?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setSkills(data.records.map((sk: any) => {
        return {...sk.fields, id: sk.id};  
      }));
    });
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/about" />} />  
        <Route path="/about" render={() => <About />} />
        <Route path="/profile" render={(props) => 
          <Profile 
            studies={ studies } 
            experience={ experience } 
            skills={ skills }
            {...props}/>}
        />  
        <Route path="/projects" render={() => <Projects />} />  
        <Route path="/contact" render={() => <Contact />} />        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
