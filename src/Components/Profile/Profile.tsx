import React from 'react';
import '../../Images/ufoInSF.png'
import Education from './ChildrenComponents/Education';
import Skills from './ChildrenComponents/Skills';
import Experience from './ChildrenComponents/Experience';
import { Switch, Route, NavLink, Redirect, RouteComponentProps } from 'react-router-dom';
import '../../app.styles.scss';

const Profile: React.SFC<RouteComponentProps> = ({ match }) => {
  const lStyles: string = "sp br-pill bb link dim dark-gray f6 f5-ns dib hover-bg-light-";
  return (
    <section className="mw8 center avenir">
      <nav className="tc w-100 border-box">
        <NavLink to={`${match.url}/languages`} activeClassName="act1" className={`${lStyles}green`}>Coding Skills</NavLink>
        <NavLink to={`${match.url}/education`} activeClassName="act2" className={`${lStyles}yellow`}>Education</NavLink>
        <NavLink to={`${match.url}/experience`} activeClassName="act3" className={`${lStyles}pink`}>Experience</NavLink>
      </nav>
      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/languages`} />}/>
        <Route path={`${match.path}/languages`} render={() => <Skills />}/>
        <Route path={`${match.path}/education`} render={() => <Education />}/>
        <Route path={`${match.path}/experience`} render={() => <Experience />}/>
      </Switch>
    </section>  
  );
}

export default Profile;