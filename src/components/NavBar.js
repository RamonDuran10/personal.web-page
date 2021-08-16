import React, { Link } from "react-router-dom";
import "./styles.css";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Profile } from "./Profile";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="menu">
          <Link to={"/"}>Home</Link>
          <ul>
            <li>
              <Link to={"/galeria"}>Galeria</Link>
            </li>
            <li>
              <Link to={"/history"}>History</Link>
            </li>
            <li>
              <Link to={"/projects"}>Others Proyects</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </li>
        <div>
          <Profile />
        </div>

        <div>
          <LoginButton />
          <LogoutButton />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
