import React from 'react';
import '../Images/ufoInSF.png'
import Education from './Profile/Education';
import Skills from './Profile/Skills';
import Experience from './Profile/Experience';
import { Switch, Route, NavLink, Redirect, RouteComponentProps } from 'react-router-dom';
import '../app.css';

interface IProps {
  studies: Array<Studies>;
  experience: Array<Experience>;
  skills: Array<Skills>;
}

const Profile: React.SFC<RouteComponentProps & IProps> = ({match, studies, experience, skills}) => {
  const lStyles: string = "sp br-pill bb link dim dark-gray f6 f5-ns dib hover-bg-light-";
  return (
    <section className="mw8 center avenir">
      <nav className="tc w-100 border-box">
        <NavLink to={`${match.url}/languages`} activeClassName="act1" className={`${lStyles}green`}>Coding Skills</NavLink>
        <NavLink to={`${match.url}/education`} activeClassName="act2" className={`${lStyles}yellow`}>Education</NavLink>
        <NavLink to={`${match.url}/experience`} activeClassName="act3" className={`${lStyles}blue`}>Experience</NavLink>
      </nav>
      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/languages`} />}/>
        <Route path={`${match.path}/languages`} render={() => <Skills skills={ skills }/>}/>
        <Route path={`${match.path}/education`} render={() => <Education studies={ studies } />}/>
        <Route path={`${match.path}/experience`} render={() => <Experience experience={ experience }/>}/>
      </Switch>
    </section>  
  );
}

export default Profile;