import React/* , { useContext } */ from 'react';
// import { PortfolioContext, IContext } from '../../Context';
import ufoInSF from '../../Images/ufoInSF.png';
import cityWeather from '../../Images/cityWeather.png';
import faceRecognition from '../../Images/faceRecognition.png';
import ticTacToe from '../../Images/ticTacToe.png';
import favoriteSites from '../../Images/favoriteSites.png';
import vegeloper from '../../Images/vegeloper.png';
import atucasa from '../../Images/atucasa.png';
import { projects } from '../../Database';

const Projects: React.FC = () => {
  return (
    <div className="mw8 center w-100 dt-ns dt--fixed-ns bb b--black-10">
      {
        projects.map((pro) => {
          const { link, name, description, repo } = pro;
          return (
            <div key={ name } className="fl w-100-ns w-50-m w-33-l pa2 h-25">
              <a href={ `${link}` } target="_blank" rel="noopener noreferrer" className="db link dim tc">
                <img 
                  src={ 
                    name === "Tic Tac Toe" ? ticTacToe : 
                    name === "UFO in San Francisco" ? ufoInSF :
                    name === "City Weather" ? cityWeather : 
                    name === "Face Recognition" ? faceRecognition :
                    name === "Favorite Sites" ? favoriteSites : 
                    name === "Vegeloper" ? vegeloper :
                    name === "A Tu Casa" ? atucasa : ""
                  } 
                  alt="Frank Ocean Blonde Album Cover" 
                  className="h5 w-100 db outline black-10"/>
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">{ name }</dd>
                  <dt className="clip">Artist</dt>
                  <dd className="ml0 gray w-100">{ description }</dd>
                </dl>
              </a>
              <div className="ph3 flex justify-center">
                <a href={ `${repo}` } target="_blank" rel="noopener noreferrer" className="f6 link dim br1 ba ph3 pv2 mb2 dib b--gray" >
                  <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                  &nbsp;Go to the code
                </a>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Projects;