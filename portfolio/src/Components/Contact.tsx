import React from 'react';
import profilePicture from '../Images/profilePicture.jpg';

const Contact: React.FC = () => {
  return (
    <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src={ profilePicture } className="br-100 h4 w4 dib" alt="ppicture" />
        <h1 className="f3">Johan Ochoa</h1>
        <p className="f4">Software Engineer</p>
        <hr className="mw3 bb bw1 b--black-10" />
        <p>jandresochoa91@gmail.com</p>
        <p>San Francisco. CA. 94116</p>
        <p>(415) 996-86-72</p>
      </div>
      <footer className="pv4 ph3 tc">
        <a className="link hover-silver near-black dib mh3 tc" href="https://www.linkedin.com/in/jandresochoa91/" title="LinkedIn">
          <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
          <span className="f6 db">LinkedIn</span>
        </a>
        <a className="link near-black hover-silver dib mh3 tc" href="https://github.com/mrmrs" title="GitHub">
          <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
          <span className="f6 db">GitHub</span>
        </a>
        <a className="link hover-silver near-black dib mh3 tc" href="http://stackoverflow.com" title="Stack Overflow">
          <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693H2.65v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.465.3-1.38L4.55 8.54l-.302 1.38zm.906-3.365l6.47 3.02.602-1.295-6.47-3.02-.602 1.295zm1.81-3.19l5.478 4.57.906-1.078-5.477-4.57-.905 1.077zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z"/></svg>
          <span className="f6 db">Stack Overflow</span>
        </a>
        <a className="link hover-silver near-black dib mh3 tc" href="http://tachyons-slack-invite.herokuapp.com" title="Slack">
          <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><g fill-rule="nonzero"><path d="M6.586 7.33l.69 2.057 2.137-.716-.69-2.056-2.137.716z"/><path d="M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.096.03-.19.045-.287.042-.338-.01-.65-.226-.765-.566l-.36-1.072-2.138.716.36 1.072c.145.435-.09.905-.523 1.05-.096.032-.192.045-.286.043-.34-.01-.65-.226-.764-.566l-.36-1.075-1.037.348c-.096.03-.19.045-.286.042-.34-.008-.65-.226-.765-.565-.146-.434.09-.904.522-1.05L5.7 9.914l-.69-2.058-1.037.347c-.094.032-.19.045-.285.043-.338-.01-.65-.226-.765-.566-.145-.434.09-.904.523-1.05l1.037-.347-.36-1.073c-.145-.434.09-.904.524-1.05.435-.145.905.09 1.05.524l.36 1.072 2.137-.716-.36-1.072c-.144-.435.09-.905.524-1.05.435-.145.906.09 1.05.523l.36 1.075 1.037-.347c.434-.146.904.088 1.05.522.145.434-.09.904-.523 1.05l-1.037.347.69 2.057 1.036-.347c.435-.145.905.09 1.05.523.146.434-.09.904-.522 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z"/></g></svg>
          <span className="f6 db">Slack</span>
        </a>
      </footer>
    </article>
  );
}

export default Contact;