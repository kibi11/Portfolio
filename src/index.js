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
            <MainContent />
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
