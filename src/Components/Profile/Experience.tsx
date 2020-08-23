import React, { useContext } from 'react';
import { PortfolioContext } from '../../Context';

interface IContext {
  experience: Array<Experience>;
}

const Experience: React.SFC = () => {
  const { experience } = useContext<IContext>(PortfolioContext);
  return (
    <section className="mw7 mt4 center tj" >
      {
        experience.map((exp: Experience) => (
          <article key={ exp.id } className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">{exp.title}</h1>
                <h3 className="athelas">{exp.company}</h3>
                {
                  JSON.parse(exp.description).map((desc: string, i: number) => (
                    <p key={ `${desc}${i}` }className="f5 f4-l lh-copy athelas">
                      {desc}
                    </p>
                  )) 
                }
              </div>
            </div>
            <p className="f6 lh-copy gray mv0"><span className="ttu">{exp.status}</span></p>
          </article>
        ))  
      }
    </section>
  );
}

export default Experience;