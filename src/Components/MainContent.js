import "./MainContent.css";
import profilepic from "../Images/pp.svg";
import ParticleBackground from "./ParticleBackground";
import { useState } from "react";

const MainContent = () => {
  const [cardAnime, setCardAnime] = useState(false);
  console.log(cardAnime);

  const handleAnimate = () => {
    setCardAnime(!cardAnime);
  };

  return (
    <div class="sectionContainer">
      <section id="section1">
        <div class="IntroductionText">
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
          <div className="messageForm">
            <form className="formOuter">
              <input
                className="formInput"
                type="text"
                placeholder="Name"
              ></input>
              <input
                className="formInput"
                type="email"
                placeholder="E-mail"
              ></input>
              <textarea
                className="formInput2"
                name="Text1"
                cols="30"
                rows="5"
              ></textarea>
            </form>
            <button
              className="formButton"
              type="submit"
              onClick={handleAnimate}
            >
              Go
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
