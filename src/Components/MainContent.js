import "./MainContent.css";
import profilepic from "../Images/pp.svg";
import frontpagepng from "../Images/frontpage.png";
import ParticleBackground from "./ParticleBackground";
import { useState, useEffect } from "react";
import Work from "./Work/Work";
import Xmeme from "./../Images/x-meme.PNG";
import Clone1 from "./../Images/clone.PNG";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Contact from "./Contact";
import { Redirect, Route, Switch } from "react-router";
import Resume from "./Work/Resume";

// import Logs
import reactPng from "./../Images/react.png";
import nodePng from "./../Images/node.png";
import mongoPng from "./../Images/mongodb.png";
import nferPng from "./../Images/nference.png";
import abPng from "./../Images/abinbev.jpg";

const MainContent = () => {
  const [cardAnime, setCardAnime] = useState(false);
  const [loaded, setLoaded] = useState(false);
  console.log(cardAnime);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoaded(true);
    }, 10); // Adjust the delay as needed
  }, []);

  const handleAnimate = () => {
    setCardAnime(!cardAnime);
  };

  return (
    <Switch>
      <Route path="/resume" component={Resume} exact />
      <Route path="/">
        <div className="sectionContainer">
          <section id="section1">
            <div
              className={`section1-inner-container ${loaded ? "loaded" : ""}`}
            >
              <img
                className="section1-animate"
                id="section1-img"
                src={frontpagepng}
              ></img>
            </div>
            <div
              className={`section1-inner-container ${loaded ? "loaded" : ""}`}
            >
              <div id="section1-inner-text">
                <h2 className="section1-animate" id="section1-text-header">
                  Hey y'all
                </h2>
                <div className="section1-animate">
                  <p>
                    I'm an 2021 Engineering Graduate. Working as a FS developer.
                    <br />I also do <stong>freelancing</stong>. Do checkout my
                    projects.
                  </p>
                </div>
                <div className="section1-animate">
                  Tech stack
                  <div className="section1-logo-outer">
                    <div className="section1-logo-container">
                      <img
                        id="section1-img"
                        height={50}
                        width={100}
                        src={nodePng}
                      ></img>
                    </div>
                    <div className="section1-logo-container">
                      <img
                        id="section1-img"
                        height={50}
                        width={100}
                        src={reactPng}
                      ></img>
                    </div>
                    <div className="section1-logo-container">
                      <img
                        id="section1-img"
                        height={50}
                        width={100}
                        src={mongoPng}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="section1-animate">
                  Worked At
                  <div className="section1-logo-outer">
                    <div className="section1-logo-container">
                      <img
                        id="section1-img"
                        height={50}
                        width={100}
                        src={nferPng}
                      ></img>
                    </div>
                    <div className="section1-logo-container">
                      <img
                        id="section1-img"
                        height={50}
                        width={100}
                        src={abPng}
                      ></img>
                    </div>
                  </div>
                </div>
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
            {/* <div className={`frontCard ${cardAnime ? "cardAnime" : null}`}>
              <ion-icon
                className="frontCardLogo"
                name="code-working-outline"
              ></ion-icon>
              ARPAN SINGH
              <div className="clickContact" onClick={handleAnimate}>
                Click <ion-icon name="flash-outline"></ion-icon> here{" "}
              </div>
            </div> */}
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
