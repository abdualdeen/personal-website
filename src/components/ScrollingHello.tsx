import React from "react";
import './scrollingHello.css';

function ScrollingHello() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      ></link>

      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Hello</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">world !</li>
            <li className="content__container__list__item">visitor !</li>
            <li className="content__container__list__item">Abdullah !</li>
            <li className="content__container__list__item">mom !</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ScrollingHello;
