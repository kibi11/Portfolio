import resume from "./../../Images/arpan.png";
import "./Resume.css";
import { Link } from "react-router-dom";

const Resume = () => {

  const handleOnClick = () => {
    window.open('https://drive.google.com/file/d/1WH09XRGdlOR4jv81eH5bOndWVQEKiD-Z/view?usp=sharing', '_blank', 'noreferrer');
    }


  return (
    <div className="imageContainer">
      <div>
           Hi, Click  <a onClick={handleOnClick}>here</a> to download my Resume.
      </div>
    </div>
  );
};

export default Resume;
