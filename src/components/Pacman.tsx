import React from "react";
import "./pacman.css";

interface Props {
    className: String
}

function Pacman(props: Props) {
    const classes = "pacman " + props.className
  return (
    <>
      <div className={classes}>
        <div className="pacman__eye"></div>
        <div className="pacman__mouth"></div>
        <div className="pacman__food"></div>
      </div>
    </>
  );
}

export default Pacman;
