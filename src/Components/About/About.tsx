import React from 'react';
import '../../app.styles.scss';

const About: React.FC = () => {
  return (
    <div className="center w-70-ns">
      <article className="cf ph3 ph4-ns pv2 bb b--black-10">
        <header className="fn w-100 fl-ns w-50-ns pr4-ns">
          <h1 className="mt0 mb0 baskerville i fw1">
            React - Ruby on Rails Developer. 
          </h1>
          <h2 className="mt4 mb3 baskerville fw1">
            I deeply emphasize in building clean and reusable code that provide value and satisfaction to the client.          
          </h2>

          <h2 className="mt4 mb3 baskerville fw1">
            I use React.js with TypeScript to create nice, functional and responsive single page applications that just work across all platforms and browsers.      
          </h2>

          <h2 className="mt4 mb3 baskerville fw1">
            I use Ruby on Rails along with PostgreSQL to create APIs, emphasizing a lot in security, and guaraneeing that all the data provided is acurate and reliable.           
          </h2>
        </header>
        <div className="fn w-100 fr-ns w-50-ns">
          <p className="tj f5 lh-copy mt0-ns">
            I'm a passionate, hard-working, easy going, and curious Software Engineer using my skills to solve problems in daily life. I am capable of being self directed, learning new things, and accepting new challenges. I am always willing to teach what I know and learn from others.
          </p>
          <p className="tj f5 lh-copy mt0-ns">
            I was born in Medellin, Colombia, the city where I lived until I graduated in Industrial Engineering. While in college I discovered my love for computers through programming classes and being an active member of the research group focused on helping vulnerable groups of people through technology.
          </p>
          <p className="tj f5 lh-copy">
            I currently live in the beautiful city of San Francisco. My family is the pillar of my life, and being able to use programming to make a positive impact on society is my passion.
          </p>
          <p className="tj f5 lh-copy">
            I love meeting people from different cultures and backgrounds, which is why I have lived in different countries, I have traveled all over the Americas and I also speak different languages (English, Spanish, Portuguese and Italian).
          </p>
        </div>
      </article>
    </div>
  );
}

export default About;