import React from 'react';

const Profile: React.SFC = () => {
  return (
    <section className="mw7 center avenir">
    <h2 className="baskerville fw1 ph3 ph0-l">Profile</h2>
    <article className="bt bb b--black-10">
      <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="photo1" />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 baskerville mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
            <p className="f6 f5-l lh-copy">
              The tech giant says it is ready to begin planning a quantum
              computer, a powerful cpu machine that relies on subatomic particles instead
              of transistors.
            </p>
            <p className="f6 lh-copy mv0">By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
    <article className="bb b--black-10">
      <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src="http://mrmrs.github.io/photos/warehouse.jpg" className="db" alt="photo2" />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 baskerville mt0 lh-title">Warehouse Prices Are Fast on the Rise</h1>
            <p className="f6 f5-l lh-copy">
              A warehouse is a commercial building for storage of goods.
              Warehouses are used by manufacturers, importers, exporters,
              wholesalers, transport businesses, customs, etc. They are
              usually large plain buildings in industrial areas of cities,
              towns and villages.
            </p>
            <p className="f6 lh-copy mv0">By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
    <article className="bb b--black-10">
      <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="photo3" />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 baskerville mt0 lh-title">Giant Whale Invests Huge Money to Build a Computer Out of Plankton</h1>
            <p className="f6 f5-l lh-copy">
              Whale is the common name for a widely distributed and diverse
              group of fully aquatic placental marine mammals. They are an
              informal grouping within the infraorder Cetacea, usually
              excluding dolphins and porpoises.
            </p>
            <p className="f6 lh-copy mv0">By Robin Darnell</p>
          </div>
        </div>
      </a>
    </article>
  </section>  
    
  );
}

export default Profile;