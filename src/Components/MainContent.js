import "./MainContent.css";
import profilepic from "../Images/pp.svg";
import ParticleBackground from "./ParticleBackground";
import { useState } from "react";
import Work from "./Work/Work";
import Xmeme from "./../Images/x-meme.PNG";
import Clone1 from "./../Images/clone.PNG";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Contact from "./Contact";

const MainContent = () => {
  const [cardAnime, setCardAnime] = useState(false);
  console.log(cardAnime);

  const handleAnimate = () => {
    setCardAnime(!cardAnime);
  };

  return (
    <div className="sectionContainer">
      <section id="section1">
        <div className="IntroductionText">
          <h1> Hola 👋</h1>
          <div className="animatedtext">
            <h2> Arpan Here ! </h2>
            <p>
              I am a FullStack Web Developer based in India. I like to Code &
              watch memes..{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <ParticleBackground className="ParticleBackground" />
        <div className="workContainer">
          <div className="workContainerTitle">My Works</div>
          <div className="workInnerContainer">
            <Work
              url={Xmeme}
              title="X-Meme"
              githubLink={"https://github.com/kibi11/X-Meme"}
              des={
                " A MERN Stack Project , where you can share and see Memes :) "
              }
            />
            <Work
              url={Clone1}
              title="AirBnB - Clone"
              githubLink={"https://github.com/kibi11/airbnb-clone"}
              des={"An AirBnB clone using NEXT Js , Tailwind CSS and MapBox "}
            />
          </div>
        </div>
      </section>

      <section id="section3">
        <div className={`frontCard ${cardAnime ? "cardAnime" : null}`}>
          <ion-icon
            className="frontCardLogo"
            name="code-working-outline"
          ></ion-icon>
          ARPAN SINGH
          <div className="clickContact" onClick={handleAnimate}>
            Click <ion-icon name="flash-outline"></ion-icon> here{" "}
          </div>
        </div>
        <div className="messageOuterContainer">
          <div className="messageText">
            <h1>Let's</h1>
            <h2>Connect</h2>
            <p>Feel free to connect with me</p>
          </div>
          <div className="partitionLine"></div>
          <Contact handleAnimate={handleAnimate} cardAnime={cardAnime} />
        </div>
      </section>
    </div>
  );
};

export default MainContent;
