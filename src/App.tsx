import React from "react";
import "./App.css";
import background from "./img/bg.jpg";
import { default as Wheel } from "./components/Wheel/Wheel";

export default function App() {
  const choices = [
    "Ice Breaker",
    "Michael Meyers",
    "Indiana Jones",
    "H3 Infection",
    "Reach Infection",
    "Shotty Ricochet",
  ];
  return (
    <div style={styles.app}>
      <h1>What should we play?</h1>
      <Wheel items={choices} />
      <p style={styles.imgCredit}>
        <a
          style={styles.link}
          href="https://www.reddit.com/r/halo/comments/8dw8xs/mcc_splash_wallpaper_with_vertical_halo_1080p/"
          target="_blank"
          rel="noopener noreferrer"
        >
          img by The_Roptor
        </a>
      </p>
    </div>
  );
}

const styles = {
  app: {
    height: `100vh`,
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column" as "column",
    fontFamily: "Lato",
    color: "white",
    textAlign: "center" as "center",
    "background-image": `url(${background})`,
    "background-size": "cover",
  },
  imgCredit: {
    fontSize: 12,
    margin: "5rem",
  },
  link: {
    color: "white",
  },
};
