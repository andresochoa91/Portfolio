import React from 'react';
import ufoInSF from '../../Images/ufoInSF.png';
import cityWeather from '../../Images/cityWeather.png';
import faceRecognition from '../../Images/faceRecognition.png';
import ticTacToe from '../../Images/ticTacToe.png';

interface IProps {
  projects: Array<Projects>;
}

const Projects: React.FC<IProps> = ({ projects }) => {
  return (
    <>
      <div className="mw8 center dt-ns dt--fixed-ns bb b--black-10">
        <article>
          {
            projects.map((pro) => (
              <div key={ pro.id } className="fl w-100-ns w-50-m w-33-l pa2">
                <a href="https://andresochoa91.github.io/ufoinsanfrancisco/" className="db link dim tc">
                  <img 
                    src={ pro.name === "Tic Tac Toe" ? ticTacToe : 
                      pro.name === "UFO in San Francisco" ? ufoInSF :
                        pro.name === "City Weather" ? cityWeather : 
                          pro.name === "Face Recognition" ? faceRecognition : ""
                    } 
                    alt="Frank Ocean Blonde Album Cover" 
                    className="h5 w-100 db outline black-10"/>
                  <dl className="mt2 f6 lh-copy">
                    <dt className="clip">Title</dt>
                    <dd className="ml0 black truncate w-100">{ pro.name }</dd>
                    <dt className="clip">Artist</dt>
                    <dd className="ml0 gray truncate w-100">{ pro.description }</dd>
                  </dl>
                </a>
              </div>
            ))
          }
        </article>
      </div>
    </>
  );
}

export default Projects;