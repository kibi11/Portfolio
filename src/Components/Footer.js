import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Arpan Singh © 2022 - 2023 </p>
      <ul className="Icon-wrapper">
        <a href="https://www.linkedin.com/in/arpan-singh-1011/">
          <li className="Icon">
            <ion-icon name="logo-linkedin"></ion-icon>
          </li>
        </a>
        <a href="https://github.com/kibi11">
          <li className="Icon">
            <ion-icon name="logo-github"></ion-icon>
          </li>
        </a>
        <li className="Icon">
          <ion-icon name="logo-facebook"></ion-icon>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
