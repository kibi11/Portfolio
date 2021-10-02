import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";
import { HashRouter as Router, BrowserRouter } from "react-router-dom";

const App = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#12141D" }}>
        {!done ? (
          <Preloader />
        ) : (
          <div className="mainPage">
            {" "}
            <Header />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300 ">
              <path
                fill="#090C0C"
                fill-opacity="1"
                d="M0,32L30,69.3C60,107,120,181,180,208C240,235,300,213,360,176C420,139,480,85,540,58.7C600,32,660,32,720,74.7C780,117,840,203,900,213.3C960,224,1020,160,1080,165.3C1140,171,1200,245,1260,250.7C1320,256,1380,192,1410,160L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
            <MainContent />
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
