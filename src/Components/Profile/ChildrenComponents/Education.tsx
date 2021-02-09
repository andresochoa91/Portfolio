import React, { FC } from 'react';
import { studies } from '../../../Database';

const Education: FC = () => {

  return (
    <section className="mw7 mt4 center">
      {/* {console.log(studies)} */}
      {
        studies.map((st) => (
          <article key={ st.school } className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">{st.school}</h1>
                <h3 className="athelas">{st.title}</h3>
                {
                  st.description.map((desc: string, i: number) => (
                    <p key={ `${desc}${i}` } className="tj f5 f4-l lh-copy athelas">
                      {desc}
                    </p>
                  ))
                }
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={ st.image } className="db" alt="" />
              </div>
            </div>
            <p className="f6 lh-copy gray mv0"><span className="ttu">{st.status}</span></p>
          </article>      
        ))
      }
    </section>


  );
}

export default Education;