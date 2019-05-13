import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

export default function Navigation() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="home-page">
          Pokedex
        </Link>
        <About />
      </div>
    </nav>
  );
}
