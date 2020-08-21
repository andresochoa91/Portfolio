import React from 'react';
import frontEnd from '../../Images/frontEnd.png';
import backEnd from '../../Images/backEnd.png';
import language from '../../Images/languageIcon.png';

const Languages: React.SFC = () => {
  return (
    <div className="tc">
      <article className="dib w-25 bg-white br3 pa3 pa4-ns mv5 mh3 ba b--black-10">
        <div className="tc">
          <img src={language} className="h4 w4 dib ba b--black-05 pa2" alt="p1" />
          <h1 className="f3 mv4">Languages</h1>
          <h2 className="f5 fw4 gray mt0">JavaScript</h2>
          <h2 className="f5 fw4 gray mt0">TypeScript</h2>
          <h2 className="f5 fw4 gray mt0">Ruby</h2>
          <h2 className="f5 fw4 gray mt0">HTML5</h2>
          <h2 className="f5 fw4 gray mt0">CSS3</h2>
        </div>
      </article>
      <article className="dib w-25 bg-white br3 pa3 pa4-ns mv5 mh3 ba b--black-10">
        <div className="tc">
          <img src={frontEnd} className="h4 w4 dib ba b--black-05 pa2" alt="p2" />
          <h1 className="f3 mv4">Front-End</h1>
          <h2 className="f5 fw4 gray mt0">ReactJS</h2>
          <h2 className="f5 fw4 gray mt0">Styled Components</h2>
          <h2 className="f5 fw4 gray mt0">Material UI</h2>
          <h2 className="f5 fw4 gray mt0">SASS</h2>
          <h2 className="f5 fw4 gray mt0">Bootstrap</h2>
        </div>
      </article>
      <article className="dib w-25 bg-white br3 pa3 pa4-ns mv5 mh3 ba b--black-10">
        <div className="tc">
          <img src={backEnd} className="h4 w4 dib ba b--black-05 pa2" alt="p2" />
          <h1 className="f3 mv4">Back-End</h1>
          <h2 className="f5 fw4 gray mt0">NodeJS</h2>
          <h2 className="f5 fw4 gray mt0">ExpressJS</h2>
          <h2 className="f5 fw4 gray mt0">Ruby on Rails</h2>
          <h2 className="f5 fw4 gray mt0">PostgreSQL</h2>
          <h2 className="f5 fw4 gray mt0">MongoDB</h2>
        </div>
      </article>
    </div>
  );
}

export default Languages;