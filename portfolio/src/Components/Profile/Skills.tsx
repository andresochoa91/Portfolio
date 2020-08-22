import React from 'react';
import frontEnd from '../../Images/frontEnd.png';
import backEnd from '../../Images/backEnd.png';
import language from '../../Images/languageIcon.png';

interface IProps {
  skills: Array<Skills>;
}

const Skills: React.SFC<IProps> = ({ skills }) => {
  return (
    <div className="tc">
      {
        skills.map((sk: Skills) => (
          <article key={ sk.id }className="dib w-25 bg-white br3 pa3 pa4-ns mv5 mh3 ba b--black-10">
            <div className="tc">
              <img 
                src={sk.name === "Languages" ? language :
                  sk.name === "Front-End" ? frontEnd : 
                    sk.name === "Back-End" ? backEnd : "" 
                } 
                className="h4 w4 dib ba b--black-05 pa2" alt="" 
              />
              <h1 className="f3 mv4">{ sk.name }</h1>
              {
                JSON.parse(sk.dev).map((de: string, i: number) => (
                  <h2 key={ `${de}${i}` } className="f5 fw4 gray mt0">{ de }</h2>
                ))
              }
            </div>
          </article>
        ))
      }
    </div>
  );
}

export default Skills;