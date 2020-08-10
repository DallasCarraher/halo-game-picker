import React from "react";
import background from "./img/bg.jpg";
import { default as choices } from "./choices";
import { default as randomize } from "./utils/random";
import { default as Wheel } from "./components/Wheel/Wheel";

export default function App() {
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
    display: "flex",
    flexDirection: "column" as "column",
    fontFamily: "Lato",
    color: "white",
    textAlign: "center" as "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  },
  imgCredit: {
    fontSize: 12,
    margin: "5rem",
  },
  link: {
    color: "white",
  },
};
