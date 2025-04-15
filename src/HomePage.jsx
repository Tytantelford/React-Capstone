import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

import "../styles/homepage.scss";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="background-image">
        <h1 className="homepage-title">
          Gear Up. Hunt Hard. Live Tough.{" "}
          <FontAwesomeIcon icon={faMountainSun} />
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
