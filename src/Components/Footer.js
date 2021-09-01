import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Arpan Singh © 2021 - 2022 </p>
      <ul className="Icon-wrapper">
        <li className="Icon">
          <ion-icon name="logo-linkedin"></ion-icon>
        </li>
        <li className="Icon">
          <ion-icon name="logo-github"></ion-icon>
        </li>
        <li className="Icon">
          <ion-icon name="logo-facebook"></ion-icon>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
