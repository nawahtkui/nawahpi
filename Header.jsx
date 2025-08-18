import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">NWTK</div>
      <nav>
        <a href="#about">About</a>
        <a href="#pi">Pi Integration</a>
        <a href="#tokenomics">Tokenomics</a>
        <a href="#roadmap">Roadmap</a>
      </nav>
    </header>
  );
}

export default Header;
