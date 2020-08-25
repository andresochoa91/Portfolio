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