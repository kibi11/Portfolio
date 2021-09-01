import "./Header.css";
import { useRef, useState } from "react";

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
        <a href="#Home" onClick={handleResponsive}>
          Home
        </a>
        <a href="#section2" onClick={handleResponsive}>
          My Work
        </a>
        <a href="#section3" onClick={handleResponsive}>
          Contact Me
        </a>
        {/* <a href="#">Link4</a> */}
      </div>
      <ul className="navItems">
        <li class="navItem">
          <a href="#Home">Home</a>
        </li>
        <li class="navItem">
          <a href="#section2">Projects</a>
        </li>
        <li class="navItem">
          <a href="#section3">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
