import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="home-page">
          Pokedex
        </Link>
      </div>
    </nav>
  );
}
