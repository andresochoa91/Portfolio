import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const tStyles: string = "f6 f5-l link bg-animate black-80 dib pa3 ph4-l hover-bg-"; 

  return (
    <header className="bg-white black-80 tc pv4 avenir">
      <a href="/" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
        <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={{fill:"currentcolor"}}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
      </a>
      <h1 className="mt2 mb0 baskerville i fw1 f1">Johan Ochoa</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">Welcome</h2>
      <nav className="bt bb tc mw7 center mt4">
        <NavLink className={`${tStyles}light-pink`} to="/">About Me</NavLink>
        <NavLink className={`${tStyles}light-green`} to="/profile">Profile</NavLink>
        <NavLink className={`${tStyles}light-blue`} to="/projects">Projects</NavLink>
        <NavLink className={`${tStyles}light-yellow`} to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;