import React from "react";
import knowledge from "../knowledge.svg";

export default function Hero() {
  return (
    // <!-- Hero -->
    <div id="Hero">
      <container>
        <h1>
          What would you like <br />
          to Learn?
        </h1>
        <img src={knowledge} alt="" height="150px" srcset="" />
      </container>
    </div>
  );
}
