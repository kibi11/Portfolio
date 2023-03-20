import "./Header.css";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Resume from "./Work/Resume";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const handleResponsive = () => {
    setResponsive(!responsive);
  };

  return (
    <div class="navBar" id="#Home">
      <div className="navTitle">{"{ ... Arpan Singh }"}</div>

      <div
        id="hamburger"
        className={responsive ? "open " : null}
        onClick={handleResponsive}
      >
        <div></div>
      </div>
      <div id="overlay" className={responsive ? "menu" : null}>
        <Link to="/Home" onClick={handleResponsive}>
          Home
        </Link>
        <Link to="/section2" exact onClick={handleResponsive}>
          Work
        </Link>
        <Link to="/section3" onClick={handleResponsive}>
          Contact Me
        </Link>
        <Link to="/Resume" onClick={handleResponsive}>Resume</Link>
      </div>
      <ul className="navItems">
        <li className="navItem">
          <Link to="/Home">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/#section2" exact>
            Work
          </Link>
        </li>
        <li className="navItem">
          <Link to="/#section3">Contact</Link>
        </li>
        <li className="navItem">
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
