import React from 'react';

const About: React.FC = () => {
  return (
    <article className="bg-white black-80 tc pv4 avenir cf ph3 ph7-ns">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="mt0 mb0 baskerville i fw1">
          On Typography
        </h1>
        <h2 className="mt3 mb3 baskerville fw1">
          An excerpt from the Form of the Book by Jan Tschichold
        </h2>
        <time className="f6 ttu tracked gray">Sometime before 1967</time>
      </header>
      <div className="fn fl-ns w-50-ns tj">
        <p className="f5 lh-copy mt0-ns">
          TYPOGRAPHY, even when poorly executed, can never be taken for granted;
          nor is it ever accidental. Indeed, beauti- fully typeset pages are always
          the result of long experience. Now and then they even attain the rank of
          great artistic achievement. But the art of typesetting stands apart from
          ex- pressive artwork, because the appeal is not limited to a small
          circle. It is open to everyone's critical judgment, and nowhere does this
          judgment carry more weight.
        </p>
        <p className="f5 lh-copy">Typography that can- not be read by everybody
          is useless. Even for someone who constantly ponders matters of
          readability and legibility, it is difficult to determine whether
          something can be read with ease, but the average reader will rebel at
          once when the type is too small or otherwise irritates the eye; both are
          signs of a certain illegibility already.
        </p>
        <p className="f5 lh-copy">
          All typography consists of letters. These appear either in the form of a
          smoothly running sentence or as an assembly of lines, which may even have
          contrasting shapes. Good typog- raphy begins, and this is no minor
          matter, with the typeset- ting of a single line of text in a book or a
          newspaper. Using exactly the same typeface, it is possible to create either
          a pleasant line, easily read, or an onerous one. Spacing, if it is too wide
          or too compressed, will spoil almost any typeface.
        </p>
      </div>
    </article>
  );
}

export default About;