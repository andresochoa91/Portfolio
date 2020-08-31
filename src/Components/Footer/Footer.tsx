import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">© 2020 <b className="ttu">Johan Ochoa</b>. All Rights Reserved</small>
      <p className="f6 tc">This portfolio was made using ReactJS, TypeScript and Airtable </p>
      <p className="underline f6 tc"><a href="https://github.com/andresochoa91/react-section-2-andresochoa91" target="_blank" rel="noopener noreferrer">Click here to see the code of this portfolio</a></p>
    </footer>
  );
}

export default Footer;