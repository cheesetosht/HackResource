import React from "react";
import logo from "../logo.png";

export default function Nav() {
  return (
    // <!-- NavBar -->
    <nav>
      <container>
        <a href="/">
          <img src={logo} alt="HackREsource" />
        </a>
        First Ever Curation Platform for Learning Resources
      </container>
    </nav>
  );
}
