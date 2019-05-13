import React from "react";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">About</NavLink>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          PK
        </NavLink>
      </li>
    </ul>
  );
}
