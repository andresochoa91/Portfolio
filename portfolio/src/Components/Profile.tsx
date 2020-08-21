import React from 'react';
import '../Images/ufoInSF.png'
import Studies from './Profile/Studies';
import Languages from './Profile/Languages';
import Voluntering from './Profile/Voluntering';
import Experience from './Profile/WorkExperience';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import '../app.css';

const Profile: React.SFC = () => {
  const lStyles: string = "sp br-pill bb link dim dark-gray f6 f5-ns dib hover-bg-light-";
  return (
    <section className="mw8 center avenir">
      <nav className="tc w-100 border-box">
        <NavLink to="/profile/languages" activeClassName="act1" className={`${lStyles}yellow`}>Languages</NavLink>
        <NavLink to="/profile/studies" activeClassName="act2" className={`${lStyles}blue`}>Studies</NavLink>
        <NavLink to="/profile/experience" activeClassName="act3" className={`${lStyles}pink`}>Experience</NavLink>
        <NavLink to="/profile/voluntering" activeClassName="act4" className={`${lStyles}grey`}>Voluntering</NavLink>
      </nav>
      <Switch>
        <Route exact path="/profile" render={() => <Redirect to="/profile/languages" />}/>
        <Route path="/profile/languages" render={() => <Languages />}/>
        <Route path="/profile/studies" render={() => <Studies />}/>
        <Route path="/profile/experience" render={() => <Experience />}/>
        <Route path="/profile/voluntering" render={() => <Voluntering />}/>
      </Switch>
    </section>  
  );
}

export default Profile;