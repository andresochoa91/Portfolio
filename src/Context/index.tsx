import React, { createContext, useState, useEffect } from 'react';

export interface IContext {
  studies: Array<Studies>;
  experience: Array<Experience>;
  skills: Array<Skills>;
  projects: Array<Projects>;
}

export const PortfolioContext = createContext<IContext>({
  studies: [],
  experience: [],
  skills: [],
  projects: []
});

export const Provider = (props: any) => {

  const [ studies, setStudies ] = useState<Array<Studies>>([]);
  const [ experience, setExperience ] = useState<Array<Experience>>([]);
  const [ skills, setSkills ] = useState<Array<Skills>>([]);
  const [ projects, setProjects ] = useState<Array<Projects>>([]);
  
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      fetch(`${url}${i}${apiKey}`)
      .then(response => response.json())
      .then(data => {
        ( i === 1 ? setStudies :
          i === 2 ? setExperience :
          i === 3 ? setSkills : setProjects
        )(data.records.map((d: any) => {
          return {...d.fields, id: d.id};  
        }))
      })
    }
  }, [apiKey, url]);

  return (
    <PortfolioContext.Provider value={{
      studies,
      experience,
      skills,
      projects
    }}>
      { props.children }
    </PortfolioContext.Provider>
  );
}