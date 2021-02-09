import React/* , { useContext } */ from 'react';
// import { PortfolioContext, IContext } from '../../Context';
import ufoInSF from '../../Images/ufoInSF.png';
import cityWeather from '../../Images/cityWeather.png';
import faceRecognition from '../../Images/faceRecognition.png';
import ticTacToe from '../../Images/ticTacToe.png';
import favoriteSites from '../../Images/favoriteSites.png';
import vegeloper from '../../Images/vegeloper.png';
import atucasa from '../../Images/atucasa.png';

const Projects: React.FC = () => {

  const projects = [
    {
      name: "A Tu Casa",
      description: "Application that allows small businesses and neighborhood stores to show, sell and deliver their products to customers, receiving all the benefits of the sale. On the Front-End, I used React with Hooks and Context, TypeScript and React-Bootstrap. On the Back-End, I used Ruby on Rails, PostgreSQL, RSpec and Firebase. The Front-End was deployed using Netlify, and the Ruby on Rails Back-End/PostgreSQL Back-End was deployed using Heroku.",
      link: "https://atucasa.netlify.app",
      repo: "https://github.com/andresochoa91/atucasa-front-end"
    },
    {
      name: "Vegeloper",
      description: "Application that allows you to search and save vegetarian recipes from different parts of the world. Created by 8 developers. My role was Project Manager and lead of Front-End team. We implemented Vanilla JavaScript, HTML, CSS, SASS on the Front-End, along with HBS to create partials. We implemented Node.JS and Express.JS in server side with MongoDB in databases. Deployed with Heroku.",
      link: "https://vegeloper-app.herokuapp.com/",
      repo: "https://github.com/Code-the-Dream-Students/veggie-recipes"
    },
    {
      name: "Favorite Sites",
      description: "Application that allows users to save, edit and delete their favorite websites, and also calculate the user's weather forecast based on the Zip Code the user privides. On the Front-End, I implemented React with Hooks and Context, TypeScript and React-Bootstrap. On the Back-End, I used Firebase, with Google Auth for Authentication and Firestore as Data Base. This application was deployed using Netlify.",
      link: "https://favorite-sites.netlify.app/weather",
      repo: "https://github.com/andresochoa91/react-final-section-andresochoa91"
    },
    {
      name: "City Weather",
      description: "Application that makes a full week's weather forecast for any part of the world, made with Vanilla JavaScript, Bootstrap, using Leaflet API to locate any place in the world on the map, OpenWeather API to forecast weather, and deployed with Netlify.",
      link: "https://getcityweather.netlify.app/",
      repo: "https://github.com/andresochoa91/weather-app"
    },
    {
      name: "UFO in San Francisco",
      description: "Video game that consists of catching aliens in San Francisco, created using Vanilla JavsScript, ProcessingJS and Canvas. Deployed with github pages.",
      link: "https://andresochoa91.github.io/ufoinsanfrancisco",
      repo: "https://github.com/andresochoa91/ufoinsanfrancisco"
    },
    {
      name: "Face Recognition",
      description: "Application that allows to recognize faces, create users, store amount of facial recognition made, created with ReactJS, NodeJS and ExpressJS on server side, database in PosgreSQL, using Clarify API and deployed with Heroku.",
      link: "https://face-rec-front-app.herokuapp.com",
      repo: "https://github.com/andresochoa91/facerecognition"
    },
    {
      name: "Tic Tac Toe",
      description: "Classic Tic Tac Toe game, made from scratch using ReactJS, React Context, React Hooks, Styled components, and deployed with Netlify.",
      link: "https://tictactoereact1.netlify.app/",
      repo: "https://github.com/andresochoa91/react-section-1-andresochoa91-1"
    },
  ];

  // const { projects } = useContext<IContext>(PortfolioContext);
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