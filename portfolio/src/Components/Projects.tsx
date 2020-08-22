import React from 'react';
import ufoInSF from '../Images/ufoInSF.png';
import cityWeather from '../Images/cityWeather.png';
import faceRecognition from '../Images/faceRecognition.png';
import ticTacToe from '../Images/ticTacToe.png';

const Projects: React.FC = () => {
  return (
    <>
      <div className="mw8 center dt-ns dt--fixed-ns bb b--black-10">
      <article>
        <div className="cf pa2">
          <div className="fl w-100-ns w-50-m w-33-l pa2">
            <a href="https://andresochoa91.github.io/ufoinsanfrancisco/" className="db link dim tc">
              <img src={ ufoInSF } alt="Frank Ocean Blonde Album Cover" className="h5 w-100 db outline black-10"/>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">UFO in San Francisco</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">JavaScript, ProcessingJS</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-100-ns w-50-m w-33-l pa2">
            <a href="https://getcityweather.netlify.app/" className="db link dim tc">
              <img src={ cityWeather } alt="Young Thug - Jeffery Album Cover" className="h5 w-100 db outline black-10"/>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">City Weather</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">JavaScript, HTML, CSS</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-100-ns w-50-m w-33-l pa2">
            <a href="https://face-rec-front-app.herokuapp.com/" className="db link dim tc">
              <img src={ faceRecognition } alt="Young Thug - Jeffery Album Cover" className="h5 w-100 db outline black-10"/>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Face Recognition</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">ReactJS, Node-ExpressJS, PostgreSQL</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-100-ns w-50-m w-33-l pa2">
            <a href="https://face-rec-front-app.herokuapp.com/" className="db link dim tc">
              <img src={ ticTacToe } alt="Young Thug - Jeffery Album Cover" className="h5 w-100 db outline black-10"/>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Tic Tac Toe</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">ReactJS, Styled Components</dd>
              </dl>
            </a>
          </div>
        </div>
      </article>
      </div>
    </>
  );
}

export default Projects;