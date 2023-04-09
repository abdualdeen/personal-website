import React from "react";
import "./programmingIconsList.css";

function WebsiteIconList() {
  return (
    <div className="container">
      <a href="https://www.typescriptlang.org/">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="icon"
        />
      </a>
      <a href="https://react.dev/">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="React"
          className="icon"
        />
      </a>
      <a href="https://firebase.google.com/">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg"
          alt="Firebase"
          className="icon"
        />
      </a>
      <a href="https://www.w3.org/Style/CSS/Overview.en.html">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="CSS"
          className="icon"
        />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="HTML"
          className="icon"
        />
      </a>
      <a href="https://tailwindcss.com/">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
          alt="TailwindCSS"
          className="icon"
        />
      </a>
    </div>
  );
}

export default WebsiteIconList;
