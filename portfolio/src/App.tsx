import React, { useEffect, useState } from 'react';
import "tachyons";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';

const App: React.FC = () => {
  const [ studies, setStudies ] = useState<Array<Studies>>([]);
  const [ experience, setExperience ] = useState<Array<Experience>>([]);
  const [ skills, setSkills ] = useState<Array<Skills>>([]);
  const [ projects, setProjects ] = useState<Array<Projects>>([]);
  const apiKey: string = "?api_key=keyBeXZyPUF8I8G0u";
  const url: string = "https://api.airtable.com/v0/appkh2au2vrFCqrR6/Table%20";


  const fetchAirtable = (num: number):void => {
    fetch(`${url}${num}${apiKey}`)
    .then(response => response.json())
    .then(data => {
      ( num === 1 ? setStudies :
        num === 2 ? setExperience :
        num === 3 ? setSkills : setProjects
      )(data.records.map((d: any) => {
        return {...d.fields, id: d.id};  
      }))
    })
  }

  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      fetchAirtable(i)
    }
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
            { ...props }
          />
        }/>  
        <Route path="/projects" render={() => <Projects projects={ projects }/>} />  
        <Route path="/contact" render={() => <Contact />} />        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
