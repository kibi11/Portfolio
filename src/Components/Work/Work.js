import "./Work.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const Work = ({ url, des, title, githubLink }) => {
  return (
    <div className="workItemContainer">
      <div className="workItemPicture">
        <img src={url} />
      </div>
      <h2>{title}</h2>
      <div className="workItemDescription">{des}</div>
      <div className="IconContainer">
        <a href={githubLink}>
          <div className="Icon">
            <ion-icon name="logo-github"></ion-icon>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Work;
