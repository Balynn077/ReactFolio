import React from "react";
import { Link } from "react-router-dom";

const NavLinks = props => {
  return (
    <>
      <Link
        className="text-black no-underline"
        to="/"
        onClick={props.toggleNav}
      >
        home
      </Link>
      <Link
        className="text-black no-underline"
        to="/about"
        onClick={props.toggleNav}
      >
        about
      </Link>
      <Link
        className="text-black no-underline"
        to="/work"
        onClick={props.toggleNav}
      >
        work
      </Link>
      <Link
        className="text-black no-underline"
        to="/contact"
        onClick={props.toggleNav}
      >
        contact
      </Link>
    </>
  );
};
export default NavLinks;
