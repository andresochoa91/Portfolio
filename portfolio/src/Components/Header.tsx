import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/htmllogo.png';
import '../app.css';

const Header: React.FC = () => {
  const tStyles: string = "f6 f5-l bg-animate black-80 dib pa3 ph4-l hover-bg-light-"; 

  return (
    <header className="bg-white black-80 tc pv4 avenir">
      <a href="/" className="bg-black-50 ba b--black-10 dib pa3 w3 h3 br-100">
        <img src={logo} alt="logo"/>
      </a>
      <h1 className="mt2 mb0 baskerville i fw1 f1">Johan Ochoa</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">Software Engineer</h2>
      <nav className="bt bb tc mw7 center mt4">
        <NavLink activeClassName="act1" className={`${tStyles}yellow`} to="/about">About Me</NavLink>
        <NavLink activeClassName="act2" className={`${tStyles}blue`} to="/profile">Profile</NavLink>
        <NavLink activeClassName="act3" className={`${tStyles}pink`} to="/projects">Projects</NavLink>
        <NavLink activeClassName="act4" className={`${tStyles}gray`} to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;