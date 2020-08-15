import React from "react";
import conch from "./img/magicConch.jpeg";
import { default as choices } from "./choices";
import { default as Wheel } from "./components/Wheel/Wheel";

export default function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.title1}>Magic Conch, </h1>
      <h1>what should we play?</h1>
      <Wheel items={choices} />
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
    backgroundImage: `url(${conch})`,
    backgroundSize: "cover",
  },
  title1: {
    marginBottom: 0,
  },
};
