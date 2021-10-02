import "./MainContent.css";
import profilepic from "../Images/pp.svg";
import ParticleBackground from "./ParticleBackground";
import { useState } from "react";
import Work from "./Work/Work";
import Xmeme from "./../Images/x-meme.PNG";
import Clone1 from "./../Images/clone.PNG";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Contact from "./Contact";
import { Redirect, Route, Switch } from "react-router";
import Resume from "./Work/Resume";

const MainContent = () => {
  const [cardAnime, setCardAnime] = useState(false);
  console.log(cardAnime);

  const handleAnimate = () => {
    setCardAnime(!cardAnime);
  };

  return (
    <Switch>
      <Route path="/resume" component={Resume} exact />
      <Route path="/">
        <div className="sectionContainer">
          <section id="section1">
            <div className="IntroductionText">
              <h1> Hey </h1>
              <div className="animatedtext">
                <p>I make Web Pages </p>
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
                  des={
                    "An AirBnB clone using NEXT Js , Tailwind CSS and MapBox "
                  }
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
      </Route>
    </Switch>
  );
};

export default MainContent;
