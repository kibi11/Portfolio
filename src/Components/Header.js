import "./Header.css";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Resume from "./Work/Resume";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const handleResponsive = (sectionID) => {
    setResponsive(!responsive);
    console.log(sectionID);
    const element = document.getElementById(sectionID);
    if (element && sectionID) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSection = (sectionID) => {
    console.log(sectionID);
    const element = document.getElementById(sectionID);
    if (element && sectionID) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <Link to="/Home" onClick={() => handleResponsive("section1")}>
          Home
        </Link>
        <Link to="/Work" exact onClick={() => handleResponsive("section2")}>
          Work
        </Link>
        <Link to="/Contact" onClick={() => handleResponsive("section3")}>
          Contact Me
        </Link>
        <Link to="/Resume" onClick={handleResponsive}>
          Resume
        </Link>
      </div>
      <ul className="navItems">
        <li className="navItem">
          <Link to="/Home" onClick={() => handleScrollToSection("section1")}>
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/Work"
            onClick={() => handleScrollToSection("section2")}
            exact
          >
            Work
          </Link>
        </li>
        <li className="navItem">
          <Link to="/Contact" onClick={() => handleResponsive("section3")}>
            Contact
          </Link>
        </li>
        <li className="navItem">
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
