import React from 'react';
import codeTheDream from '../../Images/codeTheDream.png';
import codeTenderloin from '../../Images/codeTenderloin.png';
import unaula from '../../Images/unaula.png';

const Education: React.SFC = () => {
  return (
    // <ul className="list">
    //   <li className="pa3 pa4-ns bb b--black-10">
    //     <h2>Computer Software Engineering</h2>
    //     <h3>Code the Dream</h3>
    //     <span className="f5 db lh-copy measure mb2">
    //       I passed the bootcamp test for Code The Dream and I was admitted into the advanced High Noon program where we learn Full-Stack development.
    //     </span>
    //     <p className="i">In progress</p>
    //   </li>
    //   <li className="pa3 pa4-ns bb b--black-10">
    //     <h2>Computer Software Engineering</h2>
    //     <h3>Code Tenderloin</h3>
    //     <span className="f5 db lh-copy measure mb2">
    //       Completed Code Tenderloin’s Job Readiness Program, Code Ramp program and the advanced Code Ramp ++ programs. 
    //     </span>
    //     <p className="i">Class of 2020</p>
    //   </li>
    //   <li className="pa3 pa4-ns bb b--black-10">
    //     <h2>Industrial Engineering</h2>
    //     <h3>Latin American Autonomous University</h3>
    //     <span className="f5 db lh-copy measure mb2">
    //       Industrial Engineer with a minor in Logistics.
    //     </span>
    //     <span className="f5 db lh-copy measure">
    //       Active member of the "Ingeco" research group, participating in national and international meetings in Medellín, Cartagena and Bucaramanga, on the impact of engineering on national development.
    //     </span>
    //     <p className="i">Class of 2015</p>
    //   </li>
    // </ul>


    <section className="mw7 mt4 center">
      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">Code the Dream</h1>
            <h3 className="athelas">Computer Software Engineering</h3>
            <p className="f5 f4-l lh-copy athelas">
              I passed the bootcamp test for Code The Dream and I was admitted into the advanced High Noon program where we learn Full-Stack development.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={ codeTheDream } className="db" alt="" />
          </div>
        </div>
        <p className="f6 lh-copy gray mv0"><span className="ttu">In progress</span></p>
      </article>

      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">Code Tenderloin</h1>
            <h3 className="athelas">Computer Software Engineering</h3>
            <p className="f5 f4-l lh-copy athelas">
              Completed Code Tenderloin’s Job Readiness Program, Code Ramp program and the advanced Code Ramp ++ programs. 
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={ codeTenderloin } className="db" alt="" />
          </div>
        </div>
        <p className="f6 lh-copy gray mv0"><span className="ttu">Class of 2020</span></p>
      </article>

      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">Industrial Engineering</h1>
            <h3 className="athelas">Latin American Autonomous University</h3>
            <p className="f5 f4-l lh-copy athelas">
              Industrial Engineer with a minor in Logistics.
            </p>
            <p className="f5 f4-l lh-copy athelas">
              Active member of the "Ingeco" research group, participating in national and international meetings in Medellín, Cartagena and Bucaramanga, on the impact of engineering on national development.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={ unaula } className="db" alt="" />
          </div>
        </div>
        <p className="f6 lh-copy gray mv0">By <span className="ttu">Class of 2015</span></p>
      </article>
    </section>


  );
}

export default Education;