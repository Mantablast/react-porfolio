import React from "react";
import carddata from "../CodeCards"
import CodeCards from "../CodeCards"

function Portfolio() {
  return (
    <div className="container row">
  <div className="project">
    <h3 className="top-title">Code Projects</h3>
    <hr></hr>
  </div>

  <div id="carddata">
    {CodeCards.map((carddata) => (
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


