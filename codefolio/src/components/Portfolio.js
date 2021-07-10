import React from "react";
import myProjects from "./CodeCards"
import Codecards from "./CodeCards"

function Portfolio() {
  return (
    <div className="row">
  <div className="project">
    <h3 className="top-title">Code Projects</h3>
    <hr></hr>
  </div>

  <div id="carddata" className="col s4">
    {myProjects.map((cards) => (
      <CodeCards
        key={carddata.id}
        image={carddata.image}
        name={carddata.name}
        github={carddata.github}
        livelink={carddata.livelink}
      />
    ))}
  </div>
</div>
  );
}

export default Portfolio;


